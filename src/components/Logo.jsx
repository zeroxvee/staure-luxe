import React from "react"

export function Logo({ props, color, size }) {
    return (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width={size ? size : "36px"}
            height={size ? size : "36px"}
            viewBox="0 0 600 600"
            enableBackground="new 0 0 600 600"
            xmlSpace="preserve"
            {...props}
        >
            <path
                fill={color ? color : "#001F3F"}
                id="color_x5F_1_39_"
                d="M300,15L53.183,157.501v284.999L300,585l246.817-142.501V157.501L300,15z M522.031,428.189    L300,556.379L77.969,428.189V171.811L300,43.621l222.031,128.19V428.189z M293.804,95.581l12.393-21.464l192.523,111.153v229.462    L300,529.461l-198.719-114.73V192.424h24.786v207.996L300,500.84l173.934-100.419V199.58L293.804,95.581z M293.804,470.344    l-144.425-83.383V213.039L300,126.077l150.622,86.961v166.767h-24.786V227.349L300,154.698l-125.836,72.651v145.302l132.032,76.229    L293.804,470.344z M222.262,247.962v96.919L300,389.764l77.738-44.882v-96.919h24.786v111.229L300,418.385l-102.524-59.193V247.962    H222.262z"
            ></path>
        </svg>
    )
}
