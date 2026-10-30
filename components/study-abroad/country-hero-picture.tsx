import { getImageProps } from "next/image";

const desktopDimensions = { width: 5760, height: 3000 };
const mobileDimensions = { width: 1900, height: 3000 };

type CountryHeroPictureProps = {
  alt: string;
  className: string;
  desktopSrc: string;
  mobileSrc: string;
};

export function CountryHeroPicture({
  alt,
  className,
  desktopSrc,
  mobileSrc,
}: CountryHeroPictureProps) {
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...desktopDimensions,
    alt,
    fetchPriority: "high",
    quality: 85,
    sizes: "100vw",
    src: desktopSrc,
  });

  const {
    props: { srcSet: mobileSrcSet, ...mobileImageProps },
  } = getImageProps({
    ...mobileDimensions,
    alt,
    decoding: "async",
    fetchPriority: "high",
    loading: "eager",
    quality: 90,
    sizes: "100vw",
    src: mobileSrc,
  });

  return (
    <picture>
      <source media="(max-width: 700px)" srcSet={mobileSrcSet} />
      <source media="(min-width: 701px)" srcSet={desktopSrcSet} />
      <img
        {...mobileImageProps}
        alt={alt}
        className={className}
        style={{ height: "100%", inset: 0, position: "absolute", width: "100%" }}
      />
    </picture>
  );
}
