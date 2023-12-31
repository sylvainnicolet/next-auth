import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">🔐 Auth</h1>
        <p className="text-center mt-2">A simple authentication app</p>
        <LoginButton>
          <Button size="lg" className="mt-4">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </div>
  )
}
