"use client"

import { Fragment } from "react"
import Link from "next/link"
import { Popover, Transition } from "@headlessui/react"
import clsx from "clsx"

import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { Logo } from "./Logo"
import { NavLink } from "@/components/NavLink"
import Image from "next/image"

function MobileNavLink({ href, children }) {
    return (
        <Popover.Button as={Link} href={href} className="block w-full p-2">
            {children}
        </Popover.Button>
    )
}

function MobileNavIcon({ open }) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    "origin-center transition",
                    open && "scale-90 opacity-0"
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    "origin-center transition",
                    !open && "scale-90 opacity-0"
                )}
            />
        </svg>
    )
}

function MobileNavigation() {
    return (
        <Popover>
            <Popover.Button
                className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        as="div"
                        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
                    >
                        <MobileNavLink href="#features">Features</MobileNavLink>
                        <MobileNavLink href="#testimonials">
                            Testimonials
                        </MobileNavLink>
                        <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                        <hr className="m-2 border-slate-300/40" />
                        <MobileNavLink href="/login">Sign in</MobileNavLink>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

export function Header() {
    return (
        <header className="pb-8 pt-4">
            <Container>
                <nav className="relative z-50 flex items-center justify-between border-b border-slate-400/10 pb-2">
                    <Link
                        href="/"
                        aria-label="Home"
                        className="flex flex-row items-center gap-x-0.5 font-sans text-2xl font-bold tracking-tight text-slate-900"
                    >
                        <span>Staurè</span>
                        <Logo className="h-8 w-auto" color="#f5e614" />
                        <span>Luxe</span>
                    </Link>
                    <div className="hidden md:flex md:gap-x-6">
                        <NavLink href="#product">Product</NavLink>
                        <NavLink href="#testimonials">About</NavLink>
                        <NavLink href="#pricing">Contact</NavLink>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <NavLink href="/register">Sign in</NavLink>
                        </div>
                        <Button
                            href="/login"
                            color="blue"
                            className="rounded-lg !bg-brand !px-6 transition-colors duration-200 hover:!bg-yellow-200"
                        >
                            <span className="text-slate-700">Login</span>
                        </Button>
                        <div className="-mr-1 md:hidden">
                            <MobileNavigation />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header
