import { Link } from "react-router-dom"
import * as React from "react";

import { cn } from "@/lib/utils"

export function MainNav() {

  return (
    <div className="flex flex-1 md:px-4">
      <Link to={"/"} className="mr-2 flex items-center space-x-2">
        <span className="font-bold inline-block text-lg md:text-2xl">
          幽香乐容
        </span>
      </Link>
      <nav className="md:flex gap-8 hidden text-md m-0 justify-center md:grow overflow-hidden">
        <Link
          to="/docs"
        >
          Docs
        </Link>
        <Link
          to="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80")}
        >
          Components
        </Link>
        <Link
          to="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
          )}
        >
          Themes
        </Link>
        <Link
          to="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80"
          )}
        >
          Examples
        </Link>
      </nav>
    </div>
  )
}