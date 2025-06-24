import {type VariantProps} from "tailwind-variants";

import { buttonStyles } from "./button.tv";

import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type VariantTypes = VariantProps<typeof buttonStyles>;

type ButtonProps =  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & VariantTypes

export function Button(
  props: ButtonProps
) {
  return (
    <button className={buttonStyles(props)} {...props}>
      {props.children}
    </button>
  );
}
