import React from "react"
import WatchCard from "./WatchCard"
import watch1 from "../images/watches/watch-1.png"
import watch2 from "../images/watches/watch-2.png"
import watch3 from "../images/watches/watch-3.png"
import watch4 from "../images/watches/watch-4.png"
import watch5 from "../images/watches/watch-5.png"
import watch6 from "../images/watches/watch-6.png"
import { Container } from "./Container"

const watches = [
    {
        id: 0,
        title: "Celestial Monarch",
        description:
            "The Celestial Monarch is a testament to the regality of the cosmos. Crafted from a titanium-vanadium alloy that mimics the sheen of stars, its face is encrusted with diamonds from meteoric origins. The watch hands are meticulously shaped to resemble comet tails, sweeping across the watch face in silent, grandeur motion. Unique to the Monarch is its bezel that charts out constellations, serving as both a guide and a constant reminder of our place in the vast universe.",
        price: "130,000",
        image: watch1,
    },
    {
        id: 1,
        title: "Quantum Voyager",
        description:
            "Embracing the mysteries of the quantum realm, the Quantum Voyager is a foray into timelessness. Its unique twist? A transparent center revealing oscillating particles, captured at the moment of quantum entanglement. The watch strap, infused with nanoparticles, changes hue based on your body's temperature, ensuring it's not just a timepiece, but an extension of your very essence.",
        price: "150,000",
        image: watch2,
    },
    {
        id: 2,
        title: "Orion's Odyssey",
        description:
            "Drawing inspiration from the famed Orion constellation, this watch is a tribute to the celestial hunter. Made of deep-sea black pearl and interstellar metals, its iridescence shifts as light plays upon it, much like stars twinkling in the night sky. The Orion's Odyssey comes with a unique star-map feature, allowing its wearer to trace Orion's belt and bow as they journey through time.",
        price: "165,000",
        image: watch3,
    },
    {
        id: 3,
        title: "Nebula Nirvana",
        description:
            "Nebula Nirvana captures the ethereal beauty of interstellar clouds. With a dial crafted from swirling, nebulous resins and luminescent particles, it paints a picture of a star being born every time you glance at it. The watch band, made from a blend of lunar rock and earthly leather, offers a tactile experience like no other.",
        price: "120,000",
        image: watch4,
    },
    {
        id: 4,
        title: "Pulsar Paragon",
        description:
            "The Pulsar Paragon pulsates with unmatched rhythm and precision. Its centerpiece? A tiny, swirling vortex that mimics the rotations of a pulsar star. Encased in a mixture of rare earth metals and surrounded by a constellation of jewel-like indicators, this watch doesn't just tell time - it resonates with the frequencies of the universe.",
        price: "145,000",
        image: watch5,
    },
    {
        id: 4,
        title: "Solar Sovereign",
        description:
            "A tribute to our life-giving star, the Solar Sovereign is radiant in every sense. With a faceplate forged from sunstone and flecks of gold, it captures the essence of a golden sunrise. The watch's unique solar chronograph charts the sun's zeniths and nadirs, keeping its wearer attuned to the natural ebb and flow of daylight. The band, crafted from sun-bleached leather and interwoven with gold threads, completes this masterpiece.",
        price: "195,000",
        image: watch6,
    },
]

const Product = () => {
    return (
        <section
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-slate-50 bg-gradient-to-r py-20 text-slate-900 sm:py-20"
        >
            <Container className="relative">
                <div className="mx-auto w-full text-center">
                    <h2 className="text-center text-3xl font-extrabold text-black sm:text-4xl">
                        Not Just a Watch, An Invitation
                    </h2>
                    <h3 className="mt-4 text-center text-xl font-medium text-gray-900 sm:text-2xl">
                        Step into a world where time isn&apos;t just measured,
                        but celebrated. Where exclusivity isn&apos;t just a
                        word, but a promise.
                    </h3>
                </div>
                <div className="container mx-auto my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {watches.map((watch) => (
                        <WatchCard key={watch.id} watch={watch} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Product
