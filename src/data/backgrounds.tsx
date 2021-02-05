/**
 * This file store all bottoms files.
 * @see interfaces.tsx : it contains the model of a Bottom.
 */

import { Background } from "../interfaces";

const baseURL = process.env.PUBLIC_URL + '/assets/backgrounds/';

const backgrounds: Background[] = [
    {
        name: 'Background 1',
        src: baseURL + 'b1.png',
        index: 1
    },
    {
        name: 'Background 2',
        src: baseURL + 'b2.png',
        index: 2
    },
    {
        name: 'Background 3',
        src: baseURL + 'b3.png',
        index: 3
    },
]

export default backgrounds;