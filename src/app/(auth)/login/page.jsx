import Link from "next/link"

import { Button } from "@/components/Button"
import { TextField } from "@/components/Fields"
import { Logo } from "@/components/Logo"
import { SlimLayout } from "@/components/SlimLayout"

export const metadata = {
    title: "Sign In",
}

export default function Login() {
    return (
        <SlimLayout>
            <div className="flex">
                <Link href="/" aria-label="Home">
                    <Logo className="h-10 w-auto" />
                </Link>
            </div>
            <h2 className="mt-20 text-lg font-semibold text-gray-900">
                Sign in to your account
            </h2>
            <p className="mt-2 text-sm font-medium text-gray-700">
                Don’t have an account?{" "}
                <Link
                    href="/register"
                    className="link-underline link-underline-brand rounded-md bg-black px-3 py-0.5 font-bold text-brand"
                >
                    Sign up.
                </Link>
            </p>
            <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
                <TextField
                    label="Email address"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                />
                <TextField
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                />
                <div>
                    <Button
                        type="submit"
                        variant="solid"
                        className="w-full !bg-brand !text-gray-900 transition-colors duration-200 hover:!bg-yellow-200"
                    >
                        <span>
                            Sign in <span aria-hidden="true">&rarr;</span>
                        </span>
                    </Button>
                </div>
            </form>
        </SlimLayout>
    )
}
