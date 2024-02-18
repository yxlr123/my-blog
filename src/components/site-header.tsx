import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "./mode-toggle";
import * as React from "react";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 space-x-2">
            <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-8">
                <MobileNav />
                <MainNav />
                <nav className="flex items-center">
                    <ModeToggle />
                </nav>
            </div>
        </header>
    )
}