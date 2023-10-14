import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

function PurchaseModal() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(true)}
                className="rounded bg-blue-500 px-4 py-2 text-white"
            >
                Buy
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setIsOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                Payment
                            </Dialog.Title>

                            <div className="mt-4 flex">
                                <div className="w-1/2 pr-4">
                                    <h4 className="mb-4 font-bold">
                                        Card Information
                                    </h4>
                                </div>

                                <div className="w-1/2 border-l pl-4">
                                    <h4 className="mb-4 font-bold">
                                        Order Summary
                                    </h4>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Confirm Purchase
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default PurchaseModal
