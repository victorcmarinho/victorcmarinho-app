"use client";

import Link from "next/link";
import MOF from "../../Drivers";
import ItemLink from "./ItemLink";
import { useState } from "react";

const Header = MOF<HTMLElement>((_, ref) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activated, setActivated] = useState("#home");
  return (
    <header
      ref={ref}
      className="flex h-16 items-center justify-center sticky w-full top-0 left-0 z-fixed bg-white shadow-[0_1px_4px_rgba(146,161,176,.15)] "
    >
      <nav className="flex justify-between max-w-5xl w-full text-secondary font-default mr-mb2 ml-mb2">
        <div>
          <Link href={"#"} onClick={() => setActivated("#home")}>
            Victor Marinho
          </Link>
        </div>
        <div
          id="nav-menu"
          className={`max-md:fixed max-md:top-16  max-md:w-4/5 max-md:h-full max-md:p-8 max-md:bg-secondary max-md:transition-all ${
            showMenu ? "right-0" : "max-md:right-[-100%]"
          }`}
        >
          <ul className="flex gap-8 max-md:text-white max-md:flex-col">
            <ItemLink
              href="#home"
              activated={activated === "#home"}
              onClick={() => setActivated("#home")}
            >
              Home
            </ItemLink>
            <ItemLink
              href="#about"
              activated={activated === "#about"}
              onClick={() => setActivated("#about")}
            >
              About
            </ItemLink>
            <ItemLink
              href="#skills"
              activated={activated === "#skills"}
              onClick={() => setActivated("#skills")}
            >
              Skills
            </ItemLink>
            <ItemLink
              href="#work"
              activated={activated === "#work"}
              onClick={() => setActivated("#work")}
            >
              Work
            </ItemLink>
            <ItemLink
              href="#contact"
              activated={activated === "#contact"}
              onClick={() => setActivated("#contact")}
            >
              Contact
            </ItemLink>
          </ul>
        </div>
        <div className="block md:hidden">
          <button
            title={showMenu ? "Fechar menu" : "Abrir menu"}
            className="text-secondary"
            onClick={() => setShowMenu((v) => !v)}
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="#currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
});

export default Header;
