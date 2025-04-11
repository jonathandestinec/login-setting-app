import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DiscIcon as Discord, Facebook } from "lucide-react"

interface SocialButtonProps {
  provider: "google" | "microsoft" | "facebook" | "discord"
  className?: string
}

export function SocialButton({ provider, className }: SocialButtonProps) {
  const getIcon = () => {
    switch (provider) {
      case "google":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
        )
      case "microsoft":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
            <rect x="1" y="1" width="9" height="9" fill="#f25022" />
            <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
            <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
            <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
          </svg>
        )
      case "facebook":
        return <Facebook size={20} />
      case "discord":
        return <Discord size={20} />
      default:
        return null
    }
  }

  const getLabel = () => {
    return provider.charAt(0).toUpperCase() + provider.slice(1)
  }

  const getButtonStyles = () => {
    switch (provider) {
      case "google":
        return "bg-white hover:bg-gray-100 text-black border border-gray-300"
      case "microsoft":
        return "bg-[#00a4ef] hover:bg-[#0096d6] text-white"
      case "facebook":
        return "bg-[#0081FB] hover:bg-[#0073e6] text-white"
      case "discord":
        return "bg-[#5865F2] hover:bg-[#4752c4] text-white"
      default:
        return "bg-[#222222] hover:bg-[#333333] text-white"
    }
  }

  return (
    <Button className={cn("w-full", getButtonStyles(), className)}>
      <span className="mr-2">{getIcon()}</span>
      {getLabel()}
    </Button>
  )
}
