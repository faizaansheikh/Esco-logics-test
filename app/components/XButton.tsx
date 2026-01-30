import React from 'react'

interface Props {
    label: string
}
function XButton({ label }: Props) {
    return (
        <button className="bg-orange-400 hover:bg-orange-500 shadow text-white px-8 py-3 rounded-full text-sm font-medium cursor-pointer transition-all duration-500">
            {label}
        </button>
    )
}

export default XButton