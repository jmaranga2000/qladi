"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { navLinks } from "@/lib/constants";

const TopBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 b-blue-2 shadow-xl lg:hidden">
      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={
              'flex gap-4 text-body-medium ${pathname ===link.url ? "text-blue-1" : ""}'
            }
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div
        className="flex gap-4 text-body-medium items-center"
        onClick={() => setDropdownMenu(!dropdownMenu)}
      >
        {dropdownMenu && (
          <div className="flex flex-col gap-12">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className={"flex gap-4 text-body-medium"}
              >
                {link.icon} <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <Menu className="cursor-pointer md:hidden" />
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
