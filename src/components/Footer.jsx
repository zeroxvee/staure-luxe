import Link from "next/link"
import {
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillYoutube,
} from "react-icons/ai"

import { Container } from "@/components/Container"
import { Logo } from "./Logo"
import { NavLink } from "@/components/NavLink"

export function Footer() {
    return (
        <footer className="bg-slate-50">
            <Container>
                <div className="py-16">
                    <Link
                        href="/"
                        aria-label="Home"
                        className="flex justify-center"
                    >
                        <Logo
                            className="mx-auto h-14 w-auto"
                            color="#f5e614"
                            size={58}
                        />
                    </Link>
                    <nav className="mt-10 text-sm" aria-label="quick links">
                        <div className="-my-1 flex justify-center gap-x-6">
                            <NavLink href="#product">Product</NavLink>
                            <NavLink href="#about">About</NavLink>
                            <NavLink href="#pricing">Contact</NavLink>
                        </div>
                    </nav>
                </div>
                <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
                    <div className="flex gap-x-6">
                        <Link
                            href="https://twitter.com"
                            className="group"
                            aria-label="Staurè Luxe on Twitter"
                        >
                            <AiOutlineTwitter
                                size={24}
                                className="text-slate-500 hover:text-slate-700"
                            />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            className="group"
                            aria-label="Staurè Luxe on Instagram"
                        >
                            <AiFillInstagram
                                size={24}
                                className="text-slate-500 hover:text-slate-700"
                            />
                        </Link>
                        <Link
                            href="https://youtube.com"
                            className="group"
                            aria-label="Staurè Luxe on YouTube"
                        >
                            <AiFillYoutube
                                size={24}
                                className="text-slate-500 hover:text-slate-700"
                            />
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-slate-500 sm:mt-0">
                        Copyright &copy; {new Date().getFullYear()} Staurè Luxe.
                        All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
