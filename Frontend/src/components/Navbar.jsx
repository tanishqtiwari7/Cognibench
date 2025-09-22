import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Navlinks = [
  { id: 1, to: "/pricing", label: "Pricing" },
  { id: 2, to: "/roadmap", label: "Roadmap" },
  { id: 3, to: "/community", label: "Community" },
  { id: 4, to: "/resources", label: "Resources" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const homebutton = () => {
    navigate("/");
  };

  return (
    <nav className="fixed w-full bg-light-lavender">
      <div className="flex items-center px-4 py-1">
        <span className="md:py-4 md:px-2 md:w-[15rem] h-auto inline-block align-middle">
          <button onClick={homebutton}>
            <Logo />
          </button>
        </span>
        <span className="flex gap-2 ml-10">
          {Navlinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="text-dark-lavender font-light font-simple-nunito text-xs hover:bg-dark-lavender/5 hover:rounded-full px-3 py-2  ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
