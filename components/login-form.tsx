"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SocialButton } from "@/components/social-button"

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <Card className="w-full max-w-md border-none shadow-2xl bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ea9276] to-transparent"></div>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-white">Welcome to company</CardTitle>
        <CardDescription className="text-gray-400">Log in to your account to continue</CardDescription>
      </CardHeader>
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#222222]">
          <TabsTrigger
            value="login"
            className="text-white data-[state=active]:bg-[#ea9276] data-[state=active]:text-white data-[state=active]:shadow-none"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="text-white data-[state=active]:bg-[#ea9276] data-[state=active]:text-white data-[state=active]:shadow-none"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email or Username
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email or username"
                  style={{ caretColor: "#ea9276" }}
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Link href="#" className="text-sm text-[#ea9276] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    style={{ caretColor: "#ea9276" }}
                    className="bg-[#222222] border-[#333333] text-white pr-10 focus:border-[#ea9276] focus:ring-[#ea9276]"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#ea9276]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button type="submit" className="w-full bg-[#ea9276] hover:bg-[#d87e66] text-white mt-10">
                Login
              </Button>
            </CardFooter>
          </form>
        </TabsContent>
        <TabsContent value="signup">
          <form onSubmit={handleSignup}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-white">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="Choose a username"
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-white">
                  Email
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-white">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="bg-[#222222] border-[#333333] text-white pr-10 focus:border-[#ea9276] focus:ring-[#ea9276]"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#ea9276]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthday" className="text-white">
                  Birthday
                </Label>
                <Input
                  id="birthday"
                  type="date"
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button type="submit" className="w-full bg-[#ea9276] hover:bg-[#d87e66] text-white mt-10">
                Sign Up
              </Button>
            </CardFooter>
          </form>
        </TabsContent>
      </Tabs>
      <div className="px-6 pb-6 pt-2">
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#333333]"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-[#1a1a1a] px-2 text-gray-400">Or continue with</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SocialButton provider="google" className="bg-[#F2F2F2] hover:bg-[#E4E4E4]" />
          <SocialButton provider="microsoft" className="bg-[#00A3EE] hover:bg-[#0099FF]" />
          <SocialButton provider="facebook" className="bg-[#0081FB] hover:bg-[#0077E4]" />
          <SocialButton provider="discord" className="bg-[#5865F2] hover:bg-[#4757B9]" />
        </div>
      </div>
    </Card>
  )
}
