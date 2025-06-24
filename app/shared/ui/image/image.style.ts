import { tv, type VariantProps } from "tailwind-variants";
import { baseVariants } from "../base.variants";

import styles from "./image.module.css";

export const imageStyles = tv({
  base: styles.image,
  extend: baseVariants,
  variants: {},
  defaultVariants: {
    size: "auto",
  },
});

export type ImageStylesProps = VariantProps<typeof imageStyles>;
