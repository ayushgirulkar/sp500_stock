import { useEffect, useState } from "react";
import Header from "./components/Header";
import TimeFilter from "./components/TimeFilter";
import StockCard from "./components/StockCard";
import { mockStocks } from "./data/mockData";
import Footer from "./components/Footer";

const API_KEY = import.meta.env.VITE_TWELVE_API_KEY;

function App() {
  const [stocks, setStocks] = useState([]);
  const [interval, setInterval] = useState("1D");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMode, setSortMode] = useState("none"); // "none" | "gainers" | "losers"

  const symbols = ["AAPL", "MSFT"];

  const fetchData = async () => {
    setLoading(true);
    try {
      const responses = await Promise.all(
        symbols.map((symbol) =>
          fetch(
            `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`
          ).then((res) => res.json())
        )
      );

      const data = responses.map((res, i) => {
        if (!res || res.code) return mockStocks[i];

        return {
          name: res.name,
          symbol: res.symbol,
          price: parseFloat(res.price),
          change: parseFloat(res.change),
          percent: parseFloat(res.percent_change),
        };
      });

      setStocks(data);
    } catch (error) {
      setStocks(mockStocks);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  // Filter by search term
  let filteredStocks = stocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort if needed
  if (sortMode === "gainers") {
    filteredStocks = [...filteredStocks].sort((a, b) => b.percent - a.percent);
  } else if (sortMode === "losers") {
    filteredStocks = [...filteredStocks].sort((a, b) => a.percent - b.percent);
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <TimeFilter selected={interval} onChange={setInterval} />

      
      <div className="flex justify-center my-4 px-4">
        <input
          type="text"
          placeholder="Search by name or ticker..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-full max-w-md bg-[#111] text-neon-green border border-neon-green rounded-xl shadow-neon placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      
      <div className="flex justify-center gap-4 mt-2 mb-6 flex-wrap">
        <button
          onClick={() => setSortMode("gainers")}
          className={`px-4 py-2 rounded-full text-sm font-bold border ${sortMode === "gainers"
              ? "bg-neon-green text-black shadow-neon"
              : "bg-transparent text-neon-green border-neon-green hover:bg-neon-green hover:text-black"
            }`}
        >
          Top Gainers
        </button>
        <button
          onClick={() => setSortMode("losers")}
          className={`px-4 py-2 rounded-full text-sm font-bold border ${sortMode === "losers"
              ? "bg-neon-green text-black shadow-neon"
              : "bg-transparent text-neon-green border-neon-green hover:bg-neon-green hover:text-black"
            }`}
        >
          Top Losers
        </button>
        {sortMode !== "none" && (
          <button
            onClick={() => setSortMode("none")}
            className="text-sm text-gray-400 hover:text-neon-green underline"
          >
            Clear Sort
          </button>
        )}
      </div>

      
      {loading ? (
        <div className="flex justify-center mt-10">
          <div className="flex justify-center mt-10">
            <svg
              className="w-12 h-12 animate-spin text-neon-green"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="#00ff99"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="#00ff99"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          </div>

        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 px-4 pb-10">
          {filteredStocks.length > 0 ? (
            filteredStocks.map((stock) => (
              <StockCard key={stock.symbol} stock={stock} />
            ))
          ) : (
            <div className="text-gray-500 text-center mt-6">No matching stocks found.</div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
