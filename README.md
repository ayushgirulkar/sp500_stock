#  500 Real-Time Stock Dashboard (TrevasQ task)

A **React + Tailwind CSS** project that displays **real-time stock prices** (mock and live)

---
## 🔗 Live Demo

Check out the live, deployed version of this project:

👉 [sp500 stock by ayush girulkar](https://sp500-stock-by-ayush-girulkar.vercel.app/)

---

## 🚀 Features

✅ Real-time stock updates (every 10 seconds)  
✅ Data from [Twelve Data API](https://twelvedata.com/)  
✅ Fallback to mock data if API fails  
✅ Neon dark theme (green + black)  
✅ Search bar to filter stocks by name or symbol  
✅ Timeframe filter buttons (1D, 5D, 1M, 6M, 1Y, 5Y)  
✅ Sort by **Top Gainers** or **Top Losers**  
✅ Responsive for desktop & mobile  
✅ Animated neon loader  
✅ Clean footer and SVG logo

---

## 🛠️ Technologies Used

| Tech            | Purpose                                  |
|-----------------|-------------------------------------------|
| **React**       | UI framework for building components     |
| **Tailwind CSS**| For custom neon styling & responsive UI  |
| **Twelve Data API** | For live stock price and % changes     |
| **Mock JSON**   | Fallback stock data when API fails       |
| **Vite**        | Fast development environment              |

---

## 🔑 Setup Instructions

1. **Clone the repo**
      https://github.com/ayushgirulkar/sp500_stock.git


2. **Install dependencies**.
          npm install.

3. **Get Twelve Data API key**.
           Visit https://twelvedata.com
           Create a free account and copy your API key

4. **Create .env file**
            VITE_TWELVE_API_KEY=your_api_key_here

5. **Run the project**
            npm run dev

---

## 💡 How It Works

- 📈 **Fetches stock data** for selected symbols (e.g., `AAPL`, `MSFT`) using the [Twelve Data API](https://twelvedata.com).
- 🔄 **Updates every 10 seconds** with fresh prices and % change.
- 🛡️ **Fallback mock data** is displayed if the API fails or reaches its limit.
- 🔍 **Search bar** lets users filter stocks by company name or ticker symbol.
- 📅 **Timeframe buttons** (1D, 5D, 1M, etc.) let users simulate performance filtering (UI only for now).
- 📊 **Sort buttons** allow viewing **Top Gainers** or **Top Losers** based on % change.
- 🌙 **Fully styled** with a sleek **neon green & black theme** using Tailwind CSS.

---

## 🙌 Credits

- 👨‍💻 Built by [Ayush Girulkar](www.linkedin.com/in/ayush-girulkar-bb3161219)
- 📊 Data provided by [Twelve Data](https://twelvedata.com)








