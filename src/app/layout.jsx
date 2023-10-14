import { Inter, Lexend } from "next/font/google"
import clsx from "clsx"

import "@/styles/tailwind.css"

export const metadata = {
    title: {
        template: "%s - Staurè Luxe",
        default: "Staurè Luxe - Not Just a Watch, An Invitation",
    },
    description:
        "Where craftsmanship meets mystery; every tick resonates with luxury few can attain",
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={clsx("h-full scroll-smooth bg-white antialiased")}
        >
            <body className="flex h-full flex-col">{children}</body>
        </html>
    )
}
