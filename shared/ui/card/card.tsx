import type { DetailedHTMLProps, HTMLAttributes } from "react";

type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Card({ children, ...rest }: CardProps) {
  return (
    <article {...rest}>
      {children}
    </article>
  );
}
