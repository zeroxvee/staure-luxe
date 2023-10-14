"use client"
import Image from "next/image"
import React from "react"
import PurchaseModal from "./PurchaseModal"

const WatchCard = ({ watch }) => {
    const handlePurchase = () => {
        console.log("Purchase", watch)
    }

    return (
        <div className="m-2 flex h-full flex-col rounded-lg border p-4 transition duration-300 hover:shadow-lg">
            <Image
                src={watch.image}
                alt={watch.name}
                className="h-46 mb-4 w-full rounded-lg object-cover shadow-xl"
            />
            <h3 className="mb-4 text-2xl font-semibold">{watch.title}</h3>
            <div className="mb-4 flex-grow text-gray-600">
                {watch.description}
            </div>
            <span className="mb-2 block text-lg text-green-500">
                ${watch.price.toLocaleString()}
            </span>
            <button
                className="rounded-md border border-black bg-brand/90 px-4 py-2 font-medium text-black transition duration-300 hover:bg-brand/50"
                onClick={handlePurchase}
            >
                Acquire
            </button>
        </div>
    )
}

export default WatchCard
