import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react"
import Image from "next/image";

export default function Page() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full lg:flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="text-3xl font-bold text-[#2E2A47]">Hi, there!</h1>
                    <p className="text-base text-[#7E8CA0]">Create new account to get your dashboard</p>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <ClerkLoading>
                        <Loader2 size={32} className="mt-20 text-muted-foreground animate-spin" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignUp path="/sign-up" />
                    </ClerkLoaded>
                </div>
            </div>
            <div className="h-full bg-indigo-600 hidden lg:flex items-center justify-center">
                <Image src="/logo.svg" alt="logo" width={300} height={300} />
            </div>
        </div>
    )
}