import { tv } from "tailwind-variants";

import styles from "./skeleton.module.css";
import { baseVariants } from "../base.variants";

export const divStyles = tv({
  base: styles.skeleton,
  extend: baseVariants,
  variants: {},
});
