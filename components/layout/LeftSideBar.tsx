"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-2 shadow-xl max-lg:hidden">
      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={
              'flex gap-4 text-body-medium ${pathname ===link.url ? "text-blue-1" : ""}'
            }
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 text-body-medium items-center">
        <UserButton />
        <p> Edit Profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
