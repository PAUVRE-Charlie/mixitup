/**
 * This file gathers some interfaces
 */

export interface BodyPart {
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

export interface Button {
    onPressed: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface MixAssetsButtonProps extends Button{
    text: string;
}

export interface ChangeBackgroundButtonProps extends Button{
    background: Background;
}