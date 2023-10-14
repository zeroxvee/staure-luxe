import Faqs from "@/components/Faqs"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Product from "@/components/Product"
import Features from "../components/Features"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <Product />
                <Faqs />
            </main>
            <Footer />
        </>
    )
}
