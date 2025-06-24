import { tv } from "tailwind-variants";
import styles from "./base-styles.module.css";

export const baseVariants = tv({
  variants: {
    ["width-full"]: {
      true: styles["width-full"],
    },
    lineClamp2: {
      true: styles["line-clamp-2"],
    },
    disabled: {
      true: styles.disabled,
      false: null,
    },
    colorPallete: {
      yellow: styles["color-pallete-yellow"],
      gray: styles["color-pallete-gray"],
    },
    variant: {
      outline: styles["variant-outline"],
    },
    size: {
      lg: styles["size-lg"],
      sm: styles["size-sm"],
      md: styles["size-md"],
      auto: styles["size-auto"],
    },
    radius: {
      md: styles["radius-md"],
      lg: styles["radius-lg"],
      xl: styles["radius-xl"],
      rounded: styles["radius-rounded"],
    },
    shadow: {
      none: styles["shadow-none"],
      md: styles["shadow-md"],
    },

    // Display
    flex: {
      true: styles["flex"],
      false: null,
    },
    inlineFlex: {
      true: styles["inline-flex"],
      false: null,
    },

    // Direction
    flexRow: {
      true: styles["flex-row"],
      false: null,
    },
    flexRowReverse: {
      true: styles["flex-row-reverse"],
      false: null,
    },
    flexCol: {
      true: styles["flex-col"],
      false: null,
    },
    flexColReverse: {
      true: styles["flex-col-reverse"],
      false: null,
    },

    // Wrap
    flexWrap: {
      true: styles["flex-wrap"],
      false: null,
    },
    flexNowrap: {
      true: styles["flex-nowrap"],
      false: null,
    },
    flexWrapReverse: {
      true: styles["flex-wrap-reverse"],
      false: null,
    },

    // Justify
    justifyStart: {
      true: styles["justify-start"],
      false: null,
    },
    justifyEnd: {
      true: styles["justify-end"],
      false: null,
    },
    justifyCenter: {
      true: styles["justify-center"],
      false: null,
    },
    justifyBetween: {
      true: styles["justify-between"],
      false: null,
    },
    justifyAround: {
      true: styles["justify-around"],
      false: null,
    },
    justifyEvenly: {
      true: styles["justify-evenly"],
      false: null,
    },

    // Align items
    itemsStart: {
      true: styles["items-start"],
      false: null,
    },
    itemsEnd: {
      true: styles["items-end"],
      false: null,
    },
    itemsCenter: {
      true: styles["items-center"],
      false: null,
    },
    itemsBaseline: {
      true: styles["items-baseline"],
      false: null,
    },
    itemsStretch: {
      true: styles["items-stretch"],
      false: null,
    },

    // Gap
    gap1: {
      true: styles["gap-1"],
      false: null,
    },
    gap2: {
      true: styles["gap-2"],
      false: null,
    },
    gap4: {
      true: styles["gap-4"],
      false: null,
    },
    h4: {
      true: styles.h4,
      false: null,
    },
    h6: {
      true: styles.h6,
      false: null,
    },
    h8: {
      true: styles.h8,
      false: null,
    },
    textColor: {
      minor: styles.colorMinor
    }
  },
});
