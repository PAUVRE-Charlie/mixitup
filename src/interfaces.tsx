/**
 * This file gathers some interfaces
 */

export interface BodyPart {
    name: String;
    src: String;
}

export interface Head extends BodyPart{}
export interface Body extends BodyPart{}

export enum Posistion{
    Sitting, Standing
}

export interface Bottom extends BodyPart{
    position: Posistion;
}

export interface Human{
    head: Head;
    body: Body;
    bottom: Bottom;
}

export interface Background{
    name: String;
    src: String;
    index: number;
}