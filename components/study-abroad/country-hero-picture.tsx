const desktopDimensions = { width: 5760, height: 3000 };

type CountryHeroPictureProps = {
  alt: string;
  className: string;
  desktopSrc: string;
  staticSrcSets: {
    desktop: readonly { src: string; width: number }[];
    mobile: readonly { src: string; width: number }[];
  };
};

function createSrcSet(sources: readonly { src: string; width: number }[]) {
  return sources.map(({ src, width }) => `${src} ${width}w`).join(", ");
}

export function CountryHeroPicture({
  alt,
  className,
  desktopSrc,
  staticSrcSets,
}: CountryHeroPictureProps) {
  return (
    <picture>
      <source
        media="(max-width: 700px)"
        sizes="100vw"
        srcSet={createSrcSet(staticSrcSets.mobile)}
        type="image/webp"
      />
      <source
        media="(min-width: 701px)"
        sizes="100vw"
        srcSet={createSrcSet(staticSrcSets.desktop)}
        type="image/webp"
      />
      <img
        alt={alt}
        className={className}
        decoding="async"
        fetchPriority="high"
        height={desktopDimensions.height}
        loading="eager"
        src={desktopSrc}
        style={{ height: "100%", inset: 0, position: "absolute", width: "100%" }}
        width={desktopDimensions.width}
      />
    </picture>
  );
}
