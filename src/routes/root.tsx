import "@/index.css";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@//components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { LiftSidebar } from "@/components/layout";
import { Outlet } from "react-router-dom";
import React from "react";
import post from "@/posts/hi.mdx"

export default function RootLayout() {
  return (
        <ThemeProvider
          defaultTheme="system"
          storageKey="vite-ui-theme"
        >
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-screen flex-col bg-background">
              <SiteHeader />
              <main className="mt-0 mx-auto flex-auto flex max-md:flex-col-reverse py-8 px-4 w-full max-w-7xl">
                <LiftSidebar />
                <div className="md:flex md:w-[74%] max-md:w-full">
                    <Outlet />
                </div>
              </main>
              <SiteFooter />
            </div>
          </div>
        </ ThemeProvider>
  );
}
