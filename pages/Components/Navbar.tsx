import React, { useState } from "react";
import Link from "next/link";

type childrenType = {
  list: {
    name: string;
    link: string;
  }[];
};

function Navbar({ list }: childrenType) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-slate-100 ">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <img src="/images/menu.png"></img>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 ">
          {list.map((list, incex) => (
            <li>
              <Link
                href={list.link}
                className=" p-3 inline-block hover:bg-slate-300 m-4 rounded-md hover:text-slate-500"
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:block hidden"></div>

        <ul
          className={`
              md:hidden bg-slate-100 fixed w-full top-0 overflow-y-hidden  bottom-0 py-24 pl-4
              duration-500 ${open ? "left-0" : "left-[-100%]"}
              `}
        >
          {list.map((list, incex) => (
            <li>
              <Link href={list.link} className="py-7 px-3 inline-block">
                {list.name}
              </Link>
            </li>
          ))}
          <div className="py-5"></div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
