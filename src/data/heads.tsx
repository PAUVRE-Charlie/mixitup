/**
 * This file store all heads files.
 * @see interfaces.tsx : it contains the model of a Head.
 */

import { Head } from "../interfaces";

const baseURL = process.env.PUBLIC_URL + '/assets/heads/';

const heads: Head[] = [
    {
        name: 'Afro',
        src: baseURL + 'Afro.svg'
    },
    // {
    //     name: 'Airy',
    //     src: baseURL + 'Airy.svg'
    // },
    {
        name: 'Caesar',
        src: baseURL + 'Caesar.svg'
    },
    {
        name: 'Chongo',
        src: baseURL + 'Chongo.svg'
    },
    {
        name: 'Curly',
        src: baseURL + 'Curly.svg'
    },
    // {
    //     name: 'Hijab 1',
    //     src: baseURL + 'Hijab1.svg'
    // },
    // {
    //     name: 'Hijab 2',
    //     src: baseURL + 'Hijab2.svg'
    // },
    {
        name: 'Long',
        src: baseURL + 'Long.svg'
    },
    {
        name: 'No hair',
        src: baseURL + 'NoHair.svg'
    },
    {
        name: 'Pony',
        src: baseURL + 'Pony.svg'
    },
    {
        name: 'Rad',
        src: baseURL + 'Rad.svg'
    },
    {
        name: 'Short 1',
        src: baseURL + 'Short1.svg'
    },
    {
        name: 'Short 2',
        src: baseURL + 'Short2.svg'
    },
    {
        name: 'Short beard',
        src: baseURL + 'ShortBeard.svg'
    },
    {
        name: 'Top',
        src: baseURL + 'Top.svg'
    },
    {
        name: 'Turban 1',
        src: baseURL + 'Turban1.svg'
    },
    {
        name: 'Turban 2',
        src: baseURL + 'Turban2.svg'
    },
    {
        name: 'Wavy',
        src: baseURL + 'Wavy.svg'
    },
]

export default heads;