import type { DetailedHTMLProps } from "react";
import { type ImageStylesProps, imageStyles } from "./image.style";

type BaseImageProps = {
  aspectRatio?: string;
} & DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  ImageStylesProps;

export function Image(props: BaseImageProps) {
  return <img className={imageStyles(props)} {...props} />;
}
