"use client";

import Link from "next/link";
import MOF from "../../Drivers";
import ItemLink from "./ItemLink";
import { useState } from "react";

const Header = MOF<HTMLElement>((_, ref) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header
      ref={ref}
      className="flex h-16 items-center justify-center static w-full top-0 left-0 z-fixed bg-white shadow-[0_1px_4px_rgba(146,161,176,.15)] "
    >
      <nav className="flex justify-between max-w-5xl w-full text-secondary font-default mr-mb2 ml-mb2">
        <div>
          <Link href={"#"}>Victor Marinho</Link>
        </div>
        <div
          id="nav-menu"
          className={`max-md:fixed max-md:top-16  max-md:w-4/5 max-md:h-full max-md:p-8 max-md:bg-secondary max-md:transition-all ${
            showMenu ? "right-0" : "max-md:right-[-100%]"
          }`}
        >
          <ul className="flex gap-8 max-md:text-white max-md:flex-col">
            <ItemLink href="#home">Home</ItemLink>
            <ItemLink href="#about">About</ItemLink>
            <ItemLink href="#skills">Skills</ItemLink>
            <ItemLink href="#work">Work</ItemLink>
            <ItemLink href="#contact">Contact</ItemLink>
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
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
});

export default Header;
