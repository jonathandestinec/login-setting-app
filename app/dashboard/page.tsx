import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-[#1a1a1a] border-[#333333]">
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription className="text-gray-400">Your account is ready to use</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Customize your profile in the settings page.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1a1a] border-[#333333]">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription className="text-gray-400">Your recent actions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>No recent activity to display.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1a1a] border-[#333333]">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription className="text-gray-400">Tips for new users</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Check out our community on Discord!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
