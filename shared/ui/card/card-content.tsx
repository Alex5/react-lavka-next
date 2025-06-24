import type { ReactNode } from "react";

type CardContentProps = {
  children: ReactNode;
};

export function CardContent({ children }: CardContentProps) {
  return <div>{children}</div>;
}
