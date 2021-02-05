import React from 'react'
import { ChangeBackgroundButtonProps } from '../interfaces'

export default function ChangeBackgroundButton({background, onPressed, active}: ChangeBackgroundButtonProps) {
    return (
        <button onClick={onPressed} className="changeBackgroundButton" 
        style={{top: (background.index === 1) ? '42vh': (background.index === 2) ? '60vh': '75vh',
        right: (background.index === 1) ? '1.5vw': (background.index === 2) ? '2vw': '7vw',
        filter:active ? "grayscale(0%)" : "grayscale(70%)"
        }}>
            <img src={background.src} alt={background.name}  />
        </button>
    )
}
