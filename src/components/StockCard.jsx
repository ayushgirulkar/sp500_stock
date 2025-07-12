const StockCard = ({ stock }) => {
  const { name, symbol, price, change, percent } = stock;

  const changeColor =
    change > 0 ? "text-green-400" : change < 0 ? "text-red-500" : "text-gray-300";

  return (
    <div className="bg-dark-card border border-neon-green text-neon-green rounded-2xl shadow-md p-4 w-full md:w-[300px] transition-all duration-300 hover:shadow-neon">
      <div className="font-semibold text-xl">{name}</div>
      <div className="text-sm text-gray-400">{symbol}</div>
      <div className="text-2xl mt-2 font-bold">${price.toFixed(2)}</div>
      <div className={`mt-1 text-sm ${changeColor}`}>
        {change.toFixed(2)} ({percent.toFixed(2)}%)
      </div>
    </div>
  );
};

export default StockCard;
