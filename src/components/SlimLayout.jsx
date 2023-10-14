export function SlimLayout({ children }) {
    return (
        <>
            <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
                <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
                    <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                        {children}
                    </main>
                </div>
                <div className="hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 sm:contents lg:relative lg:block lg:flex-1">
                    <div className="z-50 flex h-full flex-col items-center justify-center">
                        <h2 className="font-display mx-auto max-w-4xl text-6xl font-medium tracking-tight text-white">
                            <cite>Not Just a Watch, An Invitation.</cite>
                        </h2>
                        <span className="mx-auto mt-6 max-w-2xl text-3xl tracking-tight text-white">
                            Step into a world where time isn&apos;t just
                            measured, but celebrated. Where exclusivity
                            isn&apos;t just a word, but a promise.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
