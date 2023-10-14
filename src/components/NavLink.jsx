import Link from "next/link"

export function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="link-underline link-underline-brand inline-block px-2 text-lg text-slate-700 hover:text-slate-900"
        >
            {children}
        </Link>
    )
}
