import React from 'react'
import { MixAssetsButtonProps } from '../interfaces'

export default function MixAssetsButton({text, onPressed}: MixAssetsButtonProps) {
    return (
        <button onClick={onPressed} id="mixAssetsButton">{text}</button>
    )
}
