"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplet, Menu, ChevronDown, User, ShieldAlert, Key, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const mainLinks = [
        { name: "হোম", href: "/" },
        { name: "আমাদের সম্পর্কে", href: "/about" },
        { name: "যোগাযোগ", href: "/contact" },
    ];

    const utilityLinks = [
        { name: "শর্তাবলী (Terms)", href: "/terms", icon: ShieldAlert },
        { name: "পাসওয়ার্ড পুনরুদ্ধার", href: "/forget-password", icon: Key },
        { name: "ইমেইল ভেরিফিকেশন", href: "/verify-email", icon: Mail },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md font-sans">
            <div className="container max-w-7xl mx-auto h-16 flex items-center justify-between px-4">

                {/* Brand Logo */}
                <Link href="/" className="flex items-center space-x-2 group shrink-0">
                    <div className="bg-[#DC2626] p-1.5 rounded-xl text-white transition-transform group-hover:scale-105">
                        <Droplet className="w-5 h-5 fill-white" />
                    </div>
                    <span className="text-xl font-black tracking-tight text-[#334155]">
                        রক্ত<span className="text-[#DC2626]">সেবা</span>
                    </span>
                </Link>

                {/* Desktop Main Navigation Links */}
                <nav className="hidden md:flex items-center space-x-1">
                    {mainLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-semibold rounded-full transition-colors",
                                    isActive
                                        ? "bg-slate-100 text-[#334155]"
                                        : "text-slate-600 hover:text-[#334155] hover:bg-slate-50"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    {/* Premium Utility Dropdown for Secondary Pages */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="text-sm font-semibold text-slate-600 hover:text-[#334155] rounded-full px-4 data-[state=open]:bg-slate-50"
                            >
                                অন্যান্য পেজ <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-52 p-1.5 rounded-xl border-slate-100 shadow-xl">
                            {utilityLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <DropdownMenuItem key={link.href} asChild className="rounded-lg py-2">
                                        <Link href={link.href} className="flex items-center space-x-2 text-slate-600 font-medium text-xs">
                                            <Icon className="w-4 h-4 text-slate-400" />
                                            <span>{link.name}</span>
                                        </Link>
                                    </DropdownMenuItem>
                                );
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>

                {/* Desktop Auth Call-to-Actions */}
                <div className="hidden md:flex items-center space-x-3">
                    <Button variant="ghost" asChild className="font-semibold text-slate-600 rounded-full hover:text-[#334155]">
                        <Link href="/login">লগইন</Link>
                    </Button>
                    <Button asChild className="bg-[#334155] hover:bg-slate-800 text-white font-bold rounded-full px-6 shadow-sm">
                        <Link href="/register">নিবন্ধন করুন</Link>
                    </Button>
                </div>

                {/* Mobile Hamburger / Sheet Menu */}
                <div className="flex md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-[#334155] rounded-lg">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full max-w-[300px] sm:max-w-[350px] flex flex-col justify-between p-6 bg-white border-l border-slate-100">
                            <div className="space-y-8">
                                <SheetHeader className="text-left">
                                    <SheetTitle className="flex items-center space-x-2">
                                        <div className="bg-[#DC2626] p-1.5 rounded-xl text-white">
                                            <Droplet className="w-4 h-4 fill-white" />
                                        </div>
                                        <span className="text-lg font-black tracking-tight text-[#334155]">
                                            রক্তসেবা
                                        </span>
                                    </SheetTitle>
                                </SheetHeader>

                                {/* Mobile Main Stack Nav Links */}
                                <div className="flex flex-col space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3">মেনু</p>
                                    {mainLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "w-full px-3 py-2.5 text-base font-bold rounded-xl transition-colors",
                                                pathname === link.href
                                                    ? "bg-red-50 text-[#DC2626]"
                                                    : "text-slate-600 active:bg-slate-50"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>

                                <hr className="border-slate-100" />

                                {/* Mobile Utilities Accordion/List Section */}
                                <div className="flex flex-col space-y-2">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3">অন্যান্য ও নিরাপত্তা</p>
                                    {utilityLinks.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center space-x-3 w-full px-3 py-2 text-sm font-semibold text-slate-500 rounded-xl active:bg-slate-50"
                                            >
                                                <Icon className="w-4 h-4 text-slate-400" />
                                                <span>{link.name}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Mobile Auth Bottom Anchors */}
                            <div className="flex flex-col space-y-3 pt-6 border-t border-slate-100">
                                <Button variant="outline" asChild onClick={() => setIsOpen(false)} className="w-full border-slate-200 font-bold text-slate-600 py-6 rounded-xl">
                                    <Link href="/login" className="flex items-center justify-center gap-2">
                                        <User className="w-4 h-4" /> লগইন
                                    </Link>
                                </Button>
                                <Button asChild onClick={() => setIsOpen(false)} className="w-full bg-[#DC2626] hover:bg-red-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-red-600/10">
                                    <Link href="/register">নিবন্ধন করুন</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}