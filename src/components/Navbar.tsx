'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-[20rem] mx-auto z-50 bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent", className)}
    >

      <Menu setActive={setActive}>
        {/* <Image
          src="/assets/logo1.png"
          width={120}
          height={0}
 
          alt="logo"
          className="mx-auto"
        /> */}
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">

          </MenuItem>
        </Link>

        <Link href={"/about"}>
          <MenuItem setActive={setActive} active={active} item="About">

          </MenuItem>
        </Link>

        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">

          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar