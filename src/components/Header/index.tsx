import { FC } from "react";
import "../../global.css";
import { Link } from "react-router";

const Header: FC = () => {

  return (
    <nav className="flex pt-6 px-20 w-screen">
      <div className="grid grid-cols-2 justify-between items-center w-full">
        <h1 className="text-lg font-normal text-[#0b0c0e]">@Ayush Barnwal</h1>
        <ul className="flex justify-end gap-10 list-none text-[#0b0c0e] text-lg font-normal">
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
