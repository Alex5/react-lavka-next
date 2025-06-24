import type { VariantProps } from "tailwind-variants";
import { buttonStyles } from "../button/button.tv";
import classes from "./button-link.module.css";
import { Link } from "react-router";
import type { ComponentProps } from "react";

type VartiantTypes = VariantProps<typeof buttonStyles>;

type ButtonLinkProps = ComponentProps<typeof Link> & VartiantTypes;

export function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link
      className={buttonStyles({ ...props, className: classes["button-link"] })}
      {...props}
    >
      {props.children}
    </Link>
  );
}
