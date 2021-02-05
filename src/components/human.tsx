import React from 'react'
import { Human, Position } from '../interfaces'

export default function HumanComponent({head, body, bottom}: Human) {
    return (
        <div className={bottom.position === Position.Sitting ? "humanImageSitting" : "humanImageStanding"}>
            <img className={"headImage"} src={head.src} alt={head.name}/>
            <img className="bottomImage" src={bottom.src} alt={bottom.name}/>
            <img className={"bodyImage"} src={body.src} alt={body.name}/>
        </div>
    )
}
