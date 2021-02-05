/**
 * The human Component used to display a whole person with 3 different parts.
 */

import { Human, Position } from '../interfaces'

export default function HumanComponent({head, body, bottom}: Human) {
    return (
        // condition on the position of the body because it changes the required y-position of the images, to make it feel like there are all on the same ground
        <div className={bottom.position === Position.Sitting ? "humanImageSitting" : "humanImageStanding"}>
            <img className={"headImage"} src={head.src} alt={head.name}/>
            <img className="bottomImage" src={bottom.src} alt={bottom.name}/>
            <img className={"bodyImage"} src={body.src} alt={body.name}/>
        </div>
    )
}
