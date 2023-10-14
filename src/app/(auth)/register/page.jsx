import Link from "next/link"

import { Button } from "@/components/Button"
import { TextField } from "@/components/Fields"
import { Logo } from "@/components/Logo"
import { SlimLayout } from "@/components/SlimLayout"

export const metadata = {
    title: "Sign Up",
}

export default function Register() {
    return (
        <SlimLayout>
            <div className="flex">
                <Link href="/" aria-label="Home">
                    <Logo className="h-10 w-auto" />
                </Link>
            </div>
            <h2 className="mt-20 text-lg font-semibold text-gray-900">
                Get started for free
            </h2>
            <p className="mt-2 text-sm font-medium text-gray-700">
                Already registered?{" "}
                <Link
                    href="/login"
                    className="link-underline link-underline-brand mr-1 rounded-md bg-black px-3 py-0.5 font-bold text-brand"
                >
                    Sign in
                </Link>
                to your account.
            </p>
            <form
                action="#"
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
            >
                <TextField
                    label="First name"
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    required
                />
                <TextField
                    label="Last name"
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    required
                />
                <TextField
                    className="col-span-full"
                    label="Email address"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                />
                <TextField
                    className="col-span-full"
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                />
                <div className="col-span-full">
                    <Button
                        type="submit"
                        variant="solid"
                        className="w-full !bg-brand !text-gray-900"
                    >
                        <span>
                            Sign up <span aria-hidden="true">&rarr;</span>
                        </span>
                    </Button>
                </div>
            </form>
        </SlimLayout>
    )
}
