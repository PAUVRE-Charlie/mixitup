/**
 * A button that is used to switch the background scene
 */

import { ChangeBackgroundButtonProps } from '../interfaces'

export default function ChangeBackgroundButton({background, onPressed, active}: ChangeBackgroundButtonProps) {
    return (
        <button onClick={onPressed} className="changeBackgroundButton" 
        style={{ // a different position for each one of the three buttons
            top: (background.index === 1) ? '42vh': (background.index === 2) ? '60vh': '75vh',
            right: (background.index === 1) ? '1.5vw': (background.index === 2) ? '2vw': '7vw',
            filter:active ? "grayscale(0%)" : "grayscale(70%)"
        }}>
            <img src={background.src} alt={background.name}  />
        </button>
    )
}
