"use client";

import { Button } from "@heroui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Trash2, 
  Settings, 
  LogOut,
  Sparkles
} from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import { Link } from "@heroui/link";

export default function Sidebar() {
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = () => {
    signOut(() => {
      router.push("/");
    });
  };

  const navItems = [
    { name: "Overview", icon: <LayoutDashboard className="w-5 h-5" />, href: "/dashboard" },
    { name: "All Files", icon: <FileText className="w-5 h-5" />, href: "/dashboard?tab=files" },
    { name: "Photos", icon: <ImageIcon className="w-5 h-5" />, href: "/dashboard?tab=photos" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-2rem)] sticky top-4 ml-4 rounded-3xl glass border border-slate-200 overflow-hidden">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-indigo-500/10 p-2 rounded-xl">
          <Sparkles className="h-6 w-6 text-indigo-600" />
        </div>
        <span className="font-heading font-bold text-2xl text-slate-900 tracking-wide">Lumina</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href.includes("?") && pathname + window.location.search === item.href);
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? "bg-indigo-500/10 text-indigo-600 shadow-lg shadow-indigo-500/10 border border-indigo-500/20" 
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className={`${isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-indigo-500"} transition-colors`}>
                {item.icon}
              </div>
              <span className="font-medium">{item.name}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">


        <Link href="/dashboard?tab=settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all mb-2">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </Link>
        
        <button 
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
