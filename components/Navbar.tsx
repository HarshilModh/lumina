"use client";

import { useState, useEffect } from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { Sparkles, LayoutDashboard, LogIn, UserPlus, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <HeroNavbar
        onMenuOpenChange={setIsMenuOpen}
        className="rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm max-w-7xl"
        maxWidth="full"
        classNames={{
          wrapper: "px-6 h-14",
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-indigo-500",
          ],
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-slate-900 dark:text-white"
            icon={isMenuOpen ? <X /> : <Menu />}
          />
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-indigo-500/10 p-1.5 rounded-lg group-hover:bg-indigo-500/20">
                <Sparkles className="h-5 w-5 text-indigo-600 group-hover:text-indigo-500" />
              </div>
              <p className="font-heading font-bold text-xl text-slate-900 tracking-wide group-hover:text-indigo-600">
                Lumina
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.name} isActive={pathname === item.href}>
              <Link
                color={pathname === item.href ? "primary" : "foreground"}
                href={item.href}
                className={`text-sm font-medium ${
                  pathname === item.href
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <SignedIn>
            <NavbarItem className="hidden sm:flex">
              <Link href="/dashboard">
                <Button
                  size="sm"
                  variant="flat"
                  className="bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20 font-medium"
                  startContent={<LayoutDashboard className="h-4 w-4" />}
                >
                  Dashboard
                </Button>
              </Link>
            </NavbarItem>
            <NavbarItem>
              {isLoaded && (
                <div className="flex items-center gap-3 pl-2">
                  <span className="hidden md:block text-sm text-slate-600 font-medium">
                    {user?.firstName}
                  </span>
                  <div className="ring-2 ring-indigo-500/20 rounded-full p-0.5">
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "h-8 w-8",
                        },
                      }}
                    />
                  </div>
                </div>
              )}
            </NavbarItem>
          </SignedIn>
          <SignedOut>
            <NavbarItem className="hidden lg:flex">
              <Link href="/sign-in">
                <Button
                  variant="light"
                  className="text-slate-600 hover:text-slate-900 font-medium"
                  startContent={<LogIn className="h-4 w-4" />}
                >
                  Login
                </Button>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/sign-up">
                <Button
                  color="primary"
                  variant="shadow"
                  className="bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                  startContent={<UserPlus className="h-4 w-4" />}
                >
                  Sign Up
                </Button>
              </Link>
            </NavbarItem>
          </SignedOut>
        </NavbarContent>

        <NavbarMenu className="bg-white/95 backdrop-blur-2xl pt-8 border-t border-slate-200 top-[4.5rem] rounded-3xl mx-4 mb-4 shadow-2xl">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                className={`w-full text-lg py-2 ${
                  pathname === item.href ? "text-indigo-600 font-bold" : "text-slate-600"
                }`}
                href={item.href}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <SignedOut>
              <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
                <Button
                  fullWidth
                  variant="bordered"
                  className="border-slate-200 text-slate-900"
                  startContent={<LogIn className="h-4 w-4" />}
                >
                  Login
                </Button>
              </Link>
              <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                <Button
                  fullWidth
                  color="primary"
                  className="bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  startContent={<UserPlus className="h-4 w-4" />}
                >
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button
                  fullWidth
                  color="primary"
                  className="bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  startContent={<LayoutDashboard className="h-4 w-4" />}
                >
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </NavbarMenu>
      </HeroNavbar>
    </div>
  );
}
