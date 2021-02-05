/**
 * This file store all bottoms files.
 * @see interfaces.tsx : it contains the model of a Bottom.
 */

import { Bottom, Position } from "../interfaces";

const baseURL = process.env.PUBLIC_URL + '/assets/bottom/';

const bottoms: Bottom[] = [
    // {
    //     name: 'Baggy pants',
    //     src: baseURL + 'sitting/BaggyPants.svg',
    //     position: Position.Sitting
    // },
    {
        name: 'Skinny jeans 1',
        src: baseURL + 'sitting/SkinnyJeans1.svg',
        position: Position.Sitting
    },
    // {
    //     name: 'Sweat pants',
    //     src: baseURL + 'sitting/SweatPants.svg',
    //     position: Position.Sitting
    // },
    {
        name: 'Wheelchair',
        src: baseURL + 'sitting/Wheelchair.svg',
        position: Position.Sitting
    },
    {
        name: 'Baggy pants',
        src: baseURL + 'standing/BaggyPants.svg',
        position: Position.Standing
    },
    // {
    //     name: 'Jogging',
    //     src: baseURL + 'standing/Jogging.svg',
    //     position: Position.Standing
    // },
    {
        name: 'Shorts',
        src: baseURL + 'standing/Shorts.svg',
        position: Position.Standing
    },
    {
        name: 'Skinny jeans',
        src: baseURL + 'standing/SkinnyJeans.svg',
        position: Position.Standing
    },
    {
        name: 'Skinny jeans walk',
        src: baseURL + 'standing/SkinnyJeansWalk.svg',
        position: Position.Standing
    },
    {
        name: 'Skirt',
        src: baseURL + 'standing/Skirt.svg',
        position: Position.Standing
    },
    {
        name: 'Sprint',
        src: baseURL + 'standing/Sprint.svg',
        position: Position.Standing
    },
    {
        name: 'Sweatpants',
        src: baseURL + 'standing/Sweatpants.svg',
        position: Position.Standing
    },
]

export default bottoms;