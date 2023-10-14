"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import clsx from "clsx"
import { Container } from "@/components/Container"

const faqs = [
    {
        question:
            "What makes our watches unique compared to others on the market",
        answer: "Each of our watches is a handcrafted unique masterpiece, combining rare materials, advanced technology, and celestial inspiration to offer unparalleled luxury and exclusivity.",
    },
    {
        question:
            "How do I receive an invitation to purchase one of your watches",
        answer: "Our watches are reserved for a select clientele. Invitations are extended based on a range of factors, including alignment with our brand's ethos. To be considered, please register your interest on our website.",
    },
    {
        question: "Are the watches water-resistant",
        answer: "Absolutely. Our watches are crafted to withstand the elements, boasting a water resistance of up to 100 meters.",
    },
    {
        question: "Can I customize my watch",
        answer: "Our watches are unique masterpieces with set designs to maintain their exclusivity. However, on certain occasions, we might offer limited personalization options. Please contact our concierge service for details.",
    },
    {
        question: "How do I care for and maintain my watch",
        answer: "Your timepiece is designed to last generations. We recommend a professional servicing every 3-5 years. For daily care, gently wipe with a soft cloth to maintain its luster.",
    },
    {
        question: "How does the charity contribution work",
        answer: "Every purchase contributes to a greater cause. We donate 10% of each sale to our selected charity of the month. This contribution is made on behalf of both our esteemed brand and our cherished customer.",
    },
    {
        question: "Can I select or recommend a charity for consideration",
        answer: "Absolutely. We value our community's input and welcome recommendations. Please submit details of the charity via our website, and our team will review it for potential inclusion.",
    },
    {
        question: "Are there limited edition watches available",
        answer: "Yes. From time to time, we release special editions that celebrate celestial events or milestones. Details are shared exclusively with our invitees.",
    },
    {
        question: "What is the warranty on our watches",
        answer: "Our watches come with a 5-year warranty, reflecting our confidence in their unmatched craftsmanship and quality.",
    },
    {
        question: "How can I reach out for after-sales service or support",
        answer: "Our dedicated concierge service is available to assist you. You can reach out through our website's contact form, and a representative will be in touch promptly.",
    },
]

const Faq = ({ question, answer, isActive, toggleExpand }) => {
    return (
        <div
            className="my-6 cursor-pointer rounded-lg bg-slate-100 p-4 shadow-md"
            onClick={toggleExpand}
        >
            <h2 className="font-display text-lg leading-7 text-slate-900">
                {question}
            </h2>
            <div
                className={`transition-all duration-500 ${
                    isActive
                        ? "mt-2 max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
                <div
                    className={clsx(
                        "text-md pt-2 text-slate-700",
                        isActive && "border-t-2 border-brand/60"
                    )}
                >
                    {answer}
                </div>
            </div>
        </div>
    )
}

export function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <section
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-slate-50 bg-gradient-to-r from-black via-slate-800 to-slate-900 py-20 text-white sm:py-20"
        >
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-display text-3xl tracking-tight sm:text-4xl"
                    >
                        Luxury Unveiled
                    </h2>
                    <p className="mt-4 text-lg tracking-tight">
                        If you are interested to know more, simply -{" "}
                        <Link
                            href="/"
                            className="link-underline link-underline-brand font-bold text-brand"
                        >
                            contact us
                        </Link>
                    </p>
                </div>
                <ul role="list" className="mx-auto mt-16">
                    {faqs.map((faq, index) => (
                        <Faq
                            question={faq.question}
                            answer={faq.answer}
                            key={index}
                            isActive={activeIndex === index}
                            toggleExpand={() =>
                                setActiveIndex((prev) =>
                                    prev === index ? null : index
                                )
                            }
                        />
                    ))}
                </ul>
            </Container>
        </section>
    )
}

export default Faqs
