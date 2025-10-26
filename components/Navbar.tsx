"use client";

import {
  Navbar as AINavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function Navbar() {
  const navItems = [
    {
      name: "About Us",
      link: "/aboutus"
    },
    {
      name: "Programs", submenu: [
        { name: "Student Courses", link: "/studentcourse" },
        { name: "Corperate AI Training", link: "#course2" },
      ],
    },
    { name: "Blog", link: "#blog" },
    { name: "Contact Us", link: "/contactus" }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-50">
      <AINavbar className="overflow-visible backdrop-blur-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-b border-transparent shadow-md">
        {/* Desktop Navigation */}
        <NavBody className="overflow-visible">
          <NavbarLogo className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">

            AIShine

          </NavbarLogo>

          <div className="flex items-center gap-8">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx} className="relative group">
                  <span className="cursor-pointer text-white dark:text-white hover:text-black transition-colors">
                    {item.name}
                  </span>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg 
                                  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                                  pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
                    {item.submenu.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.link}
                        className="block px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-indigo-50 dark:hover:bg-zinc-800 transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={idx}
                  href={item.link}
                  className="text-white dark:text-white hover:text-black transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" href="https://aishine.edmingle.com/">Login</NavbarButton>
            <NavbarButton variant="primary" href="/contactus">Talk to Us</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="flex items-center justify-between w-full">
            <NavbarLogo className="text-xl font-semibold text-white">AIshine</NavbarLogo>

            {/* Buttons beside hamburger */}
            <div className="flex items-center gap-3">
              <NavbarButton
              href="https://aishine.edmingle.com/"
                variant="secondary"
                className="px-3 py-1 text-sm"
              >
                Login
              </NavbarButton>
              <NavbarButton
              href="/contactus"
                variant="primary"
                className="px-3 py-1 text-sm"
              >
                Talk to Us
              </NavbarButton>

              {/* Hamburger toggle */}
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="font-semibold">{item.name}</span>
                  <div className="flex flex-col pl-4 gap-2">
                    {item.submenu.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-neutral-700 dark:text-neutral-300 hover:text-indigo-500 transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-700 dark:text-neutral-300 hover:text-indigo-500 transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
            {/* <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a Call
              </NavbarButton>
            </div> */}
          </MobileNavMenu>
        </MobileNav>
      </AINavbar>
    </div>
  );
}
