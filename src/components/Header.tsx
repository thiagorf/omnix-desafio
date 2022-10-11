import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white h-20 px-[96px] flex justify-between items-center shadow shadow-[0_2px_4px_1px_rgba(0, 0, 0, 0.25)]">
      <Link to="/" className="text-3xl">
        Net<span className="text-brand font-bold">Solutions</span>
      </Link>

      <Link to="" className="text-xl">
        Quem Somos
      </Link>
    </header>
  );
};
