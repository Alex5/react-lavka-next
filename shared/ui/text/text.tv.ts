import { tv, type VariantProps } from "tailwind-variants";
import styles from "./Text.module.css";
import { baseVariants } from "../base.variants";

export const text = tv({
  base: styles.text,
  extend: baseVariants,
  variants: {
    fontSize: {
      xs: styles.xs,
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
      xl: styles.xl,
      title4: styles.title4,
      caption1: styles.caption1,
    },
    fontWeight: {
      thin: styles.thin,
      light: styles.light,
      normal: styles.normal,
      medium: styles.medium,
      bold: styles.bold,
    },
    fontColor: {
      minor: styles["text-minor"]
    }
  },
  defaultVariants: {
    textStyle: "md",
    fontWeight: "normal",
  },
});

export type TextVariants = VariantProps<typeof text>;
