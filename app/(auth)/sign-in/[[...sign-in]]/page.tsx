import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex min-h-screen mt-20 items-center flex-col">
            <h1 className="text-3xl font-bold mb-2 text-[#2E2A47]">Welcome Back!</h1>
            <p className="mb-5 text-base text-[#7E8CA0]">Login or create account to get back to your dashboard</p>
            <SignIn path="/sign-in" />
        </div>
    )
}