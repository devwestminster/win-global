import { getImageProps, type ImageProps } from "next/image";
import type { CSSProperties, ImgHTMLAttributes } from "react";

export type ResponsivePictureSource = {
  height: number;
  media: string;
  quality?: number;
  sizes?: string;
  src: ImageProps["src"];
  width: number;
};

type ResponsivePictureProps = {
  alt: string;
  className?: string;
  decoding?: ImgHTMLAttributes<HTMLImageElement>["decoding"];
  fallback: Omit<ResponsivePictureSource, "media">;
  fetchPriority?: ImgHTMLAttributes<HTMLImageElement>["fetchPriority"];
  fill?: boolean;
  loading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  sources?: readonly ResponsivePictureSource[];
  style?: CSSProperties;
};

export function ResponsivePicture({
  alt,
  className,
  decoding = "async",
  fallback,
  fetchPriority,
  fill = false,
  loading = "lazy",
  sources = [],
  style,
}: ResponsivePictureProps) {
  const fallbackResult = getImageProps({
    alt,
    decoding,
    fetchPriority,
    height: fallback.height,
    loading,
    quality: fallback.quality,
    sizes: fallback.sizes,
    src: fallback.src,
    width: fallback.width,
  });

  const sourceSets = sources.map((source) => {
    const {
      props: { srcSet },
    } = getImageProps({
      alt,
      height: source.height,
      quality: source.quality,
      sizes: source.sizes ?? fallback.sizes,
      src: source.src,
      width: source.width,
    });

    return { media: source.media, srcSet };
  });

  const fillStyle: CSSProperties | undefined = fill
    ? { height: "100%", inset: 0, position: "absolute", width: "100%", ...style }
    : style;

  return (
    <picture>
      {sourceSets.map((source) => (
        <source key={source.media} media={source.media} srcSet={source.srcSet} />
      ))}
      <img {...fallbackResult.props} alt={alt} className={className} style={fillStyle} />
    </picture>
  );
}
