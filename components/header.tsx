"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Bell, ChevronDown, LogOut, Menu, Settings, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const router = useRouter()
  const [username, setUsername] = useState("username")

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#333333] bg-[#1a1a1a] py-3 relative">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ea9276]/30 to-transparent"></div>
      <div className="container flex h-10 items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden hover:text-white">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/dashboard" className="flex items-center gap-2 transition-colors hover:text-white">
            <div className="h-8 w-8 rounded-full bg-[#ea9276] flex items-center justify-center">
              <span className="font-bold text-white">A</span>
            </div>
            <span className="text-lg font-bold">App</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 hover:text-white">
                <div className="h-8 w-8 rounded-full bg-[#222222] flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span>{username}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-[#222222] border-[#333333] text-white">
              <DropdownMenuItem className="hover:bg-[#333333] hover:text-white">
                <Link href="/dashboard/settings" className="flex items-center w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#333333] hover:text-white">
                <Link href="https://discord.com" target="_blank" className="flex items-center w-full">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Community</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#333333]" />
              <DropdownMenuItem className="hover:bg-[#333333] hover:text-white" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
