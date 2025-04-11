import { LoginForm } from "@/components/login-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#1a1a1a]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] bg-[#ea9276] opacity-[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[40%] -left-[10%] w-[70%] h-[70%] bg-[#ea9276] opacity-[0.03] rounded-full blur-[120px]"></div>
      </div>
      <LoginForm />
    </div>
  )
}
