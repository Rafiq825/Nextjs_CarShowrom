import { MouseEventHandler } from "react";

export interface CustomButton {
    title: string;
    containerStyels?:string
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit'
}
export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacture: (manufacturer:string)=>void;
}