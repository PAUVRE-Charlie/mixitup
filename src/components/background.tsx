import React from 'react'
import { Background } from '../interfaces'

export default function BackgroundComponent({name, src, index}: Background) {
    return (
        <img className="backgroundImage" src={src} alt={name} />
    )
}
