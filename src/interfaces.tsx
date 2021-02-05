/**
 * This file gathers some interfaces
 */

interface BodyPart {
    name: string;
    src: string;
}

export interface Head extends BodyPart{}
export interface Body extends BodyPart{}

export enum Position{
    Sitting, Standing
}

export interface Bottom extends BodyPart{
    position: Position;
}

export interface Human{
    head: Head;
    body: Body;
    bottom: Bottom;
}

// this element is used to store the indexes of the three assets currently shown on the screen
export interface RandomSelection {
    headIndex: number;
    bodyIndex: number;
    bottomIndex: number;
}

export interface Background{
    name: string;
    src: string;
    index: number;
}

interface ButtonProps {
    onPressed: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface MixAssetsButtonProps extends ButtonProps{
    text: string;
}

export interface ChangeBackgroundButtonProps extends ButtonProps{
    background: Background;
    active: boolean;
}