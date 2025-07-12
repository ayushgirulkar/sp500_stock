import Logo from "../assets/sp500.svg";

const Header = () => (
  <div className="flex items-center justify-center gap-4 py-6 bg-black text-neon-green text-2xl md:text-4xl font-bold shadow-lg border-b border-neon-green">
    <img
      src={Logo}
      alt="Logo"
      className="w-10 h-10 md:w-12 md:h-12 animate-pulse drop-shadow-neon"
    />
    <span>S&amp;P 500 Stock Dashboard</span>
  </div>
);

export default Header;
