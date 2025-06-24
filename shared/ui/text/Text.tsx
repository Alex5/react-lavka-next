import {text, type TextVariants} from "./text.tv";
import type {HTMLAttributes} from "react";

interface TextProps
    extends HTMLAttributes<HTMLSpanElement>,
        TextVariants {
}

export function Text(props: TextProps) {
    return (
        <span
            className={text(props)}
            title={props.children?.toLocaleString()}
            {...props}
        >
      {props.children}
    </span>
    );
}
