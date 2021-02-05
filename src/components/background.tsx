/**
 * The backgound scene
 */

import { Background } from '../interfaces'

export default function BackgroundComponent({name, src}: Background) {
    return (
        <img className="backgroundImage" src={src} alt={name} />
    )
}
