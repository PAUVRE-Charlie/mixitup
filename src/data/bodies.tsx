/**
 * This file store all bodies files.
 * @see interfaces.tsx : it contains the model of a Body.
 */

import { Body } from "../interfaces";

const baseURL = process.env.PUBLIC_URL + '/assets/bodies/';

const bodies: Body[] = [
    {
        name: 'Hoodie',
        src: baseURL + 'Hoodie.svg'
    },
    {
        name: 'Jacket',
        src: baseURL + 'Jacket.svg'
    },
    {
        name: 'Jacket 2',
        src: baseURL + 'Jacket2.svg'
    },
    // {
    //     name: 'Lab coat',
    //     src: baseURL + 'LabCoat.svg'
    // },
    {
        name: 'Long sleev',
        src: baseURL + 'LongSleeve.svg'
    },
    {
        name: 'Pointing forward',
        src: baseURL + 'PointingForward.svg'
    },
    // {
    //     name: 'Pointing up',
    //     src: baseURL + 'PointingUp.svg'
    // },
    {
        name: 'Pregnant',
        src: baseURL + 'Pregnant.svg'
    },
    // {
    //     name: 'Trench coat',
    //     src: baseURL + 'TrenchCoat.svg'
    // },
    {
        name: 'Turtle neck',
        src: baseURL + 'TurtleNeck.svg'
    },
]

export default bodies;