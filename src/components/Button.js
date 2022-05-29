import React from 'react'

export default function Button(props) {
    const {
        btnText,
        onClick,
        type
    } = props

    return (
        <button onClick={onClick} type={type}>
            {btnText}
        </button>
    )
}