"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Settings } from "lucide-react"

import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-[#333333] bg-[#1a1a1a] p-4">
      <nav className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-colors hover:text-white",
              pathname === item.href && "bg-[#222222] text-white",
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
