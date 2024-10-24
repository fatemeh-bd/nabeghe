"use client";
import React from "react";

import Link from "next/link";
import useScreenWidth from "../hooks/useScreenWidth";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import { startMobileSize } from "@/_utiles/enums";
export const navItems = [
  {
    text: "دسته بندی آمـــوزشها",
    childrens: [
      {
        path: "/",
        text: "برنامه نویسی وب",
      },
    ],
  },
  {
    text: "مقالات آموزشی",
    path: "/articles",
  },
  { text: "دوره ها", childrens: [{ text: "لینکهای مفید", path: "/" }] },
];
const Header = () => {
  const isMobile = useScreenWidth(startMobileSize);
  return (
    <header className="bg-white/80 backdrop-blur-xl py-4 border-b border-border border-secondary-500 sticky top-0 z-[999]">
      <div className="relative mx-auto px-5 max-w-7xl">
        {isMobile ? <MobileHeader /> : <DesktopHeader />}
      </div>
    </header>
  );
};

export default Header;
export const Logo = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-2 text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"></path>
        <path
          fillRule="evenodd"
          d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="flex flex-col items-start">
        <span className="font-semibold text-sm text-muted">آکـادمـــــی</span>
        <span className="font-black text-xl">کد برتـــر</span>
      </span>
    </Link>
  );
};
export const Counter = ({ value }: { value: number }) => {
  return (
    <span className="absolute -top-1 left-0 flex h-5 w-5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
      <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-primary text-white font-bold text-xs">
        {value}
      </span>
    </span>
  );
};
