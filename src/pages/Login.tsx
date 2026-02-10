import { LoginForm } from "@/modules/Authentication/LoginForm";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-background dark:from-background dark:via-background dark:to-background p-4 md:p-10">
      {/* Animated background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-right golden glow */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl animate-pulse" />
        {/* Bottom-left golden glow */}
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/8 dark:bg-primary/10 blur-3xl animate-pulse [animation-delay:1.5s]" />
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        {/* Floating dots pattern */}
        <div className="absolute top-20 left-20 h-2 w-2 rounded-full bg-primary/20 dark:bg-primary/30 animate-bounce-slow" />
        <div className="absolute top-40 right-32 h-1.5 w-1.5 rounded-full bg-primary/15 dark:bg-primary/20 animate-bounce-slow [animation-delay:0.5s]" />
        <div className="absolute bottom-32 left-1/3 h-1 w-1 rounded-full bg-primary/20 dark:bg-primary/25 animate-bounce-slow [animation-delay:1s]" />
        <div className="absolute bottom-20 right-20 h-2.5 w-2.5 rounded-full bg-primary/15 dark:bg-primary/20 animate-bounce-slow [animation-delay:1.8s]" />
      </div>

      <div className="relative z-10 w-full max-w-sm md:max-w-4xl animate-fade-in">
        <LoginForm />
      </div>
    </div>
  )
}