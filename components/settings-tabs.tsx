"use client"

import type React from "react"

import { useState } from "react"
import { Pencil, Trash2, Upload, User } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function SettingsTabs() {
  const [avatar, setAvatar] = useState<string | null>(null)
  const [banner, setBanner] = useState<string | null>(null)
  const [username, setUsername] = useState("username")
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setAvatar(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setBanner(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-[#222222]">
        <TabsTrigger
          value="profile"
          className="text-white data-[state=active]:bg-[#ea9276] data-[state=active]:text-white data-[state=active]:shadow-none"
        >
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="account"
          className="text-white data-[state=active]:bg-[#ea9276] data-[state=active]:text-white data-[state=active]:shadow-none"
        >
          Account
        </TabsTrigger>
        <TabsTrigger
          value="security"
          className="text-white data-[state=active]:bg-[#ea9276] data-[state=active]:text-white data-[state=active]:shadow-none"
        >
          Security
        </TabsTrigger>
        <TabsTrigger
          value="notifications"
          className="text-white data-[state=active]:bg-[#ea9276] data-[state=active]:text-white data-[state=active]:shadow-none"
        >
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="space-y-6 mt-6">
        <Card className="bg-[#1a1a1a] border-[#333333] border-l-[3px] border-l-[#ea9276] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ea9276]/30 to-transparent"></div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Profile Picture</h3>
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-[#222222] flex items-center justify-center border-2 border-[#ea9276]/20">
                  {avatar ? (
                    <Image src={avatar || "/placeholder.svg"} alt="Avatar" fill className="object-cover" />
                  ) : (
                    <User className="h-12 w-12 text-gray-400" />
                  )}
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                  onClick={() => setAvatar(null)}
                  disabled={!avatar}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2 flex-1">
                <Label htmlFor="avatar-upload" className="block">
                  Update Profile Picture
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                  <Button
                    asChild
                    variant="outline"
                    className="bg-[#222222] border-[#333333] hover:bg-[#333333] hover:text-[#ea9276]"
                  >
                    <label htmlFor="avatar-upload" className="flex items-center gap-2 cursor-pointer">
                      <Upload className="h-4 w-4" />
                      Upload Image
                    </label>
                  </Button>
                </div>
                <p className="text-sm text-gray-400">Must be JPEG, PNG, or GIF and cannot exceed 10MB.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#333333] border-l-[3px] border-l-[#ea9276] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ea9276]/30 to-transparent"></div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Profile Banner</h3>
            <div className="space-y-4">
              <div className="relative w-full h-32 rounded-md overflow-hidden bg-[#222222] border border-[#333333]">
                {banner ? (
                  <Image src={banner || "/placeholder.svg"} alt="Banner" fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-400">No banner uploaded</p>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4">
                <Input
                  id="banner-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleBannerChange}
                />
                <Button
                  asChild
                  variant="outline"
                  className="bg-[#222222] border-[#333333] hover:bg-[#333333] hover:text-[#ea9276]"
                >
                  <label htmlFor="banner-upload" className="flex items-center gap-2 cursor-pointer">
                    <Upload className="h-4 w-4" />
                    Upload Banner
                  </label>
                </Button>
                <Button variant="destructive" onClick={() => setBanner(null)} disabled={!banner}>
                  Remove Banner
                </Button>
              </div>
              <p className="text-sm text-gray-400">File format: JPEG, PNG, GIF (recommended 1200×480, max 10MB)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#333333] border-l-[3px] border-l-[#ea9276] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ea9276]/30 to-transparent"></div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Profile Settings</h3>
            <p className="text-gray-400 mb-4">Change identifying details for your account</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-[#222222] border-[#333333] hover:bg-[#333333] hover:text-[#ea9276]"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-400">You may update your username once a month</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input
                  id="display-name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Customize how your name appears"
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
                <p className="text-xs text-gray-400">Customize capitalization for your username</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about yourself"
                  className="bg-[#222222] border-[#333333] text-white resize-none min-h-[100px] focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>

              <Button className="bg-[#ea9276] hover:bg-[#d87e66] text-white">Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="account" className="space-y-6 mt-6">
        <Card className="bg-[#1a1a1a] border-[#333333] border-l-[3px] border-l-[#ea9276] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ea9276]/30 to-transparent"></div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Account Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthday">Birthday</Label>
                <Input
                  id="birthday"
                  type="date"
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>

              <Button className="bg-[#ea9276] hover:bg-[#d87e66] text-white">Update Account</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security" className="space-y-6 mt-6">
        <Card className="bg-[#1a1a1a] border-[#333333] border-l-[3px] border-l-[#ea9276] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ea9276]/30 to-transparent"></div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Change Password</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="Enter your current password"
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Enter your new password"
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your new password"
                  className="bg-[#222222] border-[#333333] text-white focus:border-[#ea9276] focus:ring-[#ea9276]"
                />
              </div>

              <Button className="bg-[#ea9276] hover:bg-[#d87e66] text-white">Update Password</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-6 mt-6">
        <Card className="bg-[#1a1a1a] border-[#333333] border-l-[3px] border-l-[#ea9276] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ea9276]/30 to-transparent"></div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <p className="text-gray-400">Configure how you receive notifications</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="email-notifications"
                    className="h-4 w-4 rounded border-[#333333] bg-[#222222] text-[#ea9276] focus:ring-[#ea9276]"
                  />
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="push-notifications"
                    className="h-4 w-4 rounded border-[#333333] bg-[#222222] text-[#ea9276] focus:ring-[#ea9276]"
                  />
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="marketing-emails"
                    className="h-4 w-4 rounded border-[#333333] bg-[#222222] text-[#ea9276] focus:ring-[#ea9276]"
                  />
                  <Label htmlFor="marketing-emails">Marketing Emails</Label>
                </div>
              </div>

              <Button className="bg-[#ea9276] hover:bg-[#d87e66] text-white">Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
