import { SettingsTabs } from "@/components/settings-tabs"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-400">Manage your account settings and preferences.</p>
      </div>
      <SettingsTabs />
    </div>
  )
}
