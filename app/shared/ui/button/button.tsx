import { type VariantProps } from "tailwind-variants";

import { buttonStyles } from "./button.tv";

import { type ComponentProps, type ElementType, type ReactNode } from "react";

type VartiantTypes = VariantProps<typeof buttonStyles>;

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps> &
  VartiantTypes;

const defaultElement = "button";

export function Button<E extends ElementType = typeof defaultElement>(
  props: ButtonProps<E>
) {
  const TagName = props.as || defaultElement;

  return (
    <TagName className={buttonStyles(props)} {...props}>
      {props.children}
    </TagName>
  );
}
