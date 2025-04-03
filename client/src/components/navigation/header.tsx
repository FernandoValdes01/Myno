"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // es para mobile

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          Myno
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-4">
          <div className="items-center hidden md:flex">
            <div className="relative flex items-center w-64 h-9">
              <Input
                type="search"
                placeholder="Buscador"
                className="h-9 w-full"
              />
              <Button size="sm" variant="ghost" className="absolute right-0">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Search Toggle */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Buscar"
            >
              {isSearchOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Perfil">
                <User className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/profile">Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/history">Historial</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <div className="flex items-center justify-between space-x-2 py-2">
                  <Label htmlFor="toggleDarkMode">Modo Oscuro</Label>
                  <Switch
                    id="toggleDarkMode"
                    checked={theme === "dark"}
                    onCheckedChange={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  />
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Search Bar (Conditional) */}
      {isSearchOpen && (
        <div className="p-2 border-b md:hidden">
          <div className="relative flex items-center">
            <Input
              type="search"
              placeholder="Buscador"
              className="h-9 w-full"
              autoFocus
            />
            <Button size="sm" variant="ghost" className="absolute right-0">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
