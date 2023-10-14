"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import watch_alloy from "../images/watches/alloy-2.png"
import watch_display from "../images/watches/display.png"
import watch_mechanism from "../images/watches/mechanism-3.png"
import watch_strap from "../images/watches/strap.png"
import watch_chronology from "../images/watches/chronology.png"
import watch_bezel from "../images/watches/bezel-2.png"
import { Logo } from "./Logo"
import clsx from "clsx"

const features = [
    {
        title: "Ethereal Titanium-Alloy Blend",
        description:
            "Crafted from a rare blend of titanium and meteorite metals, our watches offer not only supreme lightness but also the strength of celestial bodies. Each watch echoes the resilience and timelessness of the vast cosmos.",
        image: watch_alloy,
    },

    {
        title: "Vortex Crystal Display",
        description:
            "Our watch face employs a Vortex Crystal Display, an innovation that merges sapphire and diamond dust. It's scratch-resistant, virtually indestructible, and refracts light in mesmerizing patterns, much like the dance of galaxies.",
        image: watch_display,
    },

    {
        title: "Gravity-Defying Mechanism",
        description:
            "Harnessing the wonders of quantum physics, our watches boast a gravity-defying mechanism that ensures unparalleled precision. Time no longer bows to Earth's limitations, and neither will you.",
        image: watch_mechanism,
    },

    {
        title: "Pulse Sync Chronology",
        description:
            "Our timepieces can subtly sync with the heartbeat of its wearer. This pulse synchronicity ensures that you're not just wearing a watch, but embracing a timepiece that breathes with you.",
        image: watch_chronology,
    },

    {
        title: "Echo Strap Technology",
        description:
            "Crafted with ethically-sourced, otherworldly materials, our watch straps adjust to ambient temperatures, ensuring a perfect fit while echoing the ambient emotions of its environment. It's not just a strap; it's a second skin.",
        image: watch_strap,
    },

    {
        title: "Celestial Turnstile Bezel",
        description:
            "Drawing inspiration from ancient cosmic observatories, our bezel doesn't just mark time; it aligns with celestial events. Witness solstices, equinoxes, and rare cosmic phenomena right on your wrist.",
        image: watch_bezel,
    },
]

const Feature = ({ feature, side }) => {
    const slideInAnimation = {
        hidden: { x: side === "left" ? "-100%" : "100%", opacity: 0 },
        visible: { x: 0, opacity: 1 },
    }

    return (
        <motion.div
            variants={slideInAnimation}
            initial="hidden"
            animate="visible"
            className={`flex ${
                side === "left" ? "flex-row" : "flex-row-reverse"
            } mb-16 items-center`}
        >
            <Image
                src={feature.image}
                className="h-auto w-1/4"
                alt={feature.title}
                height={300}
                width={300}
            />
            <div className="ml-8 mr-8">
                <h2 className="mb-2 text-3xl text-[#D4AF37]">
                    {feature.title}
                </h2>
                <p className="text-[#FFF5E1]">{feature.description}</p>
            </div>
        </motion.div>
    )
}

const Features = () => {
    return (
        <div className="relative">
            <section>
                <div className="bg-black p-8 text-white">
                    <Introduction />
                    <div className="mx-auto mb-12 flex flex-col items-start md:my-24 md:flex-row">
                        <div className="sticky ml-0 md:ml-12 lg:w-full">
                            <div className="container mx-auto h-full w-full">
                                <div className="-ml-[19px] mt-2 flex items-center justify-center text-2xl text-brand">
                                    <span className="flex flex-row items-center gap-2 font-bold tracking-tight text-white">
                                        Staurè{" "}
                                        <Logo color="#f5e614" size={58} /> Luxe
                                    </span>
                                </div>
                                <div className="wrap relative h-full overflow-hidden px-2 py-10 pt-2 md:px-10">
                                    <div className="absolute right-1/2 h-full border-2 border-r border-brand" />
                                    <div className="absolute left-1/2 h-full border-2 border-r border-brand" />
                                    {features.map((feature, index) => (
                                        <div
                                            className={clsx(
                                                "mb-8 flex w-full items-center justify-between",
                                                index % 2 === 0
                                                    ? "flex-row-reverse"
                                                    : ""
                                            )}
                                            key={index}
                                        >
                                            <div className="order-1 w-5/12" />
                                            <div
                                                className={clsx(
                                                    "order-1 flex w-6/12 flex-col py-4 md:px-4",
                                                    index % 2 === 0
                                                        ? "items-start pr-2 text-left md:pr-8"
                                                        : "items-end pl-2 text-right md:pl-8"
                                                )}
                                            >
                                                <Image
                                                    className="mb-3"
                                                    alt={feature.title}
                                                    width={300}
                                                    src={feature.image}
                                                />
                                                <h4 className="mb-3 text-lg font-bold md:text-2xl">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center pb-2 text-center">
                                    <div className="mb-8 flex w-full items-center justify-center">
                                        <div className="text order-1 flex w-10/12 flex-col px-1 py-4 md:w-6/12">
                                            <h4 className="mb-3 text-center text-lg font-bold md:text-2xl">
                                                Golden Promise of Giving
                                            </h4>
                                            <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                                                Beneath the gleam and precision
                                                of each Staurè Luxe timepiece
                                                lies a heartfelt promise. With
                                                every acquisition, 10% of your
                                                purchase illuminates lives,
                                                contributing to our selected
                                                charity for the month. It&apos;s
                                                more than a watch; it&apos;s a
                                                pledge, from both Staurè Luxe
                                                and our esteemed clientele, to
                                                make a timeless difference.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center pb-2">
                                    <div className="absolute right-1/2 h-[60px] border-2 border-r border-brand" />
                                    <div className="absolute left-1/2 h-[60px] border-2 border-r border-brand" />
                                </div>
                                <div className="-ml-[19px] mt-6 flex items-center justify-center text-2xl text-brand">
                                    <span className="flex flex-row items-center gap-2 font-bold tracking-tight text-white">
                                        Staurè{" "}
                                        <Logo color="#f5e614" size={58} /> Luxe
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features

const Introduction = () => (
    <div className="rounded-md bg-gradient-to-r from-slate-800 to-[#D4AF37] p-8 text-white">
        <h2 className="mt-12 text-center text-3xl font-extrabold sm:text-4xl">
            Where Craftsmanship Meets Exclusivity
        </h2>
        <h3 className="mb-12 mt-4 text-center text-xl font-medium sm:text-2xl">
            Discover a realm where every second is sculpted with precision, and
            every timepiece is a story of handpicked luxury.
        </h3>
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
                <p className="mb-4 mt-4 text-xl leading-relaxed">
                    Luxury watches are more than just timekeepers; they are
                    masterpieces that bridge generations. Every cog, wheel, and
                    movement tells a story of craftsmanship, dedication, and
                    passion. Dive deep into the world of horology with Staurè
                    Luxe&apos;s unique collection, where each timepiece is not
                    just a watch, but a timeless piece of art.
                </p>
            </div>
            <blockquote className="rounded-lg bg-white bg-opacity-20 p-4">
                <p className="mb-4 text-xl italic">
                    &ldquo;I&apos;ve always been fascinated by the art of
                    watchmaking. The meticulous craftsmanship that goes into
                    each unique timepiece is truly remarkable.&rdquo;
                </p>
                <cite className="block font-bold not-italic text-brand">
                    — John Doe, CEO of Staurè Luxe
                </cite>
            </blockquote>
        </div>
    </div>
)
