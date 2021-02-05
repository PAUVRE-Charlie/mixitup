/**
 * This file store all bottoms files.
 * @see interfaces.tsx : it contains the model of a Bottom.
 */

import { Bottom, Posistion } from "../interfaces";

const baseURL = process.env.PUBLIC_URL + '/assets/bottom/';

const bottoms: Bottom[] = [
    {
        name: 'Baggy pants',
        src: baseURL + 'sitting/BaggyPants.svg',
        position: Posistion.Sitting
    },
    {
        name: 'Skinny jeans 1',
        src: baseURL + 'sitting/SkinnyJeans1.svg',
        position: Posistion.Sitting
    },
    {
        name: 'Sweat pants',
        src: baseURL + 'sitting/SweatPants.svg',
        position: Posistion.Sitting
    },
    {
        name: 'Wheelchair',
        src: baseURL + 'sitting/Wheelchair.svg',
        position: Posistion.Sitting
    },
    {
        name: 'Baggy pants',
        src: baseURL + 'standing/BaggyPants.svg',
        position: Posistion.Standing
    },
    {
        name: 'Jogging',
        src: baseURL + 'standing/Jogging.svg',
        position: Posistion.Standing
    },
    {
        name: 'Shorts',
        src: baseURL + 'standing/Shorts.svg',
        position: Posistion.Standing
    },
    {
        name: 'Skinny jeans',
        src: baseURL + 'standing/SkinnyJeans.svg',
        position: Posistion.Standing
    },
    {
        name: 'Skinny jeans walk',
        src: baseURL + 'standing/SkinnyJeansWalk.svg',
        position: Posistion.Standing
    },
    {
        name: 'Skirt',
        src: baseURL + 'standing/Skirt.svg',
        position: Posistion.Standing
    },
    {
        name: 'Spring',
        src: baseURL + 'standing/Spring.svg',
        position: Posistion.Standing
    },
    {
        name: 'Sweatpants',
        src: baseURL + 'standing/Sweatpants.svg',
        position: Posistion.Standing
    },
]

export default bottoms;