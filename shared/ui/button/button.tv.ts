import { tv } from "tailwind-variants";

import styles from "./button.module.css";

import { baseVariants } from "../base.variants";

export const buttonStyles = tv({
  base: styles.button,
  extend: baseVariants,
  variants: {
    icon: {
      "true": styles["icon"],
      "false": null,
    },
  },
  defaultVariants: {
    colorPallete: "gray",
    size: "md",
    width: "auto",
  },
});
