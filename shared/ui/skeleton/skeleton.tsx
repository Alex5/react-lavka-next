import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { divStyles } from "./skeleton.tv";
import type { VariantProps } from "tailwind-variants";

type VariantPropsType = VariantProps<typeof divStyles>;

type SkeletonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  VariantPropsType;

export function Skeleton(props: SkeletonProps) {
  return (
    <div className={divStyles(props)} {...props}>
      {props.children}
    </div>
  );
}
