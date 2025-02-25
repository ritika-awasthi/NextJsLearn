"use client";

import React from "react";
import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();
  const isActive =
    pathname === link.href ||
    (pathname.startsWith(link.href) && link.href !== "/");
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-stroke bg-white px-4 py-5 shadow-1 dark:border-stroke-dark dark:bg-gray-dark md:px-5 2xl:px-10">
      <div className="flex gap-10">
        <div>
          <Image src="/logo.png" alt="Ecolab logo" width={150} height={12} />
        </div>
        <div className="flex gap-10 pl-2 m-2">
          <Link
            className={
              pathname === href ||
              (pathname.startsWith(link.href) && link.href !== "/")
                ? "font-bold"
                : text - blue - 500
            }
            href="/overview"
          >
            Overview
          </Link>
          <Link href="/reports">Reports</Link>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2 min-[375px]:gap-4">
        <div className="flex relative w-full max-w-[300px] gap-4">
          <p className="relative mt-2">Anna Smith</p>
          <Image
            src="/BotProfilePic.png"
            alt="Bot profile picture"
            width={40}
            height={40}
          />
        </div>

        <div className="flex shrink-0 gap-3">
          <Image src="/Chatbot.png" alt="Ecolab logo" width={30} height={5} />
          <p className="mt-2 font-bold text-[#1268d9]">AR Studio</p>
        </div>
      </div>
    </header>
  );
};

export default Menu;
