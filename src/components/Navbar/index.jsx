"use client";
import { BellSimple, Chat, HouseSimple, MagnifyingGlass, User } from "@phosphor-icons/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-16 pt-12">
        <Link href='/'>
          <HouseSimple size={32} />
        </Link>

        <Link href='/'>
          <MagnifyingGlass size={32} />
        </Link>

        <Link href='/'>
          <Chat size={32} />
        </Link>

        <Link href='/'>
          <BellSimple size={32} />
        </Link>

        <Link href='/'>
          <User size={32} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
