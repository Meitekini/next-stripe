import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./search-bar";
import Menu from "./menu";
import CategoryDrawer from "./category-drawer";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-700">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <CategoryDrawer />
          <Link href="/" className="flex-start ml-4">
            <Image
              src="images/logo.svg"
              alt={`${APP_NAME} Logo`}
              width={48}
              height={48}
              className="h-10 w-10 rounded-full"
            />
            <span>{APP_NAME}</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
