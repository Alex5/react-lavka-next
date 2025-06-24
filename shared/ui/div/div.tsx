import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import { type VariantProps } from "tailwind-variants";
import { divStyles } from "./div.tv";

type VariantPropsType = VariantProps<typeof divStyles>;

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  VariantPropsType;

export function Div(props: DivProps) {
  return (
    <div className={divStyles(props)} {...props}>
      {props.children}
    </div>
  );
}
