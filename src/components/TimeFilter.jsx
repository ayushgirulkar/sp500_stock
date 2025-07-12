const TimeFilter = ({ selected, onChange }) => {
  const intervals = ["1D", "5D", "1M", "6M", "1Y", "5Y"];
  return (
    <div className="flex justify-center gap-4 my-4 flex-wrap">
      {intervals.map((int) => (
        <button
          key={int}
          className={`px-4 py-2 rounded-full text-sm font-bold transition duration-200 border ${
            selected === int
              ? "bg-neon-green text-black shadow-neon"
              : "bg-transparent text-neon-green border-neon-green hover:bg-neon-green hover:text-black"
          }`}
          onClick={() => onChange(int)}
        >
          {int}
        </button>
      ))}
    </div>
  );
};
export default TimeFilter;
