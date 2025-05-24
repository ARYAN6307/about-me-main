"use client";

import { Flex, RevealFx, Scroller, SmartImage } from ".";
import { useEffect, useState, useRef } from "react";

interface Image {
  src: string;
  alt: string;
}

interface CarouselProps extends React.ComponentProps<typeof Flex> {
  images: Image[];
  indicator?: "line" | "thumbnail";
  aspectRatio?: string;
  sizes?: string;
  revealedByDefault?: boolean;
  activeIndex: number; // Controlled by parent
  onIndexChange: (index: number) => void; // Callback to update parent's index
}

const Carousel: React.FC<CarouselProps> = ({
  images = [],
  indicator = "line",
  aspectRatio = "16 / 9",
  sizes,
  revealedByDefault = false,
  activeIndex,
  onIndexChange,
  ...rest
}) => {
  const [isTransitioning, setIsTransitioning] = useState(revealedByDefault);
  const [initialTransition, setInitialTransition] = useState(revealedByDefault);
  const nextImageRef = useRef<HTMLImageElement | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const preloadNextImage = (nextIndex: number) => {
    if (nextIndex >= 0 && nextIndex < images.length) {
      nextImageRef.current = new Image();
      nextImageRef.current.src = images[nextIndex].src;
    }
  };

  const handleNextClick = () => {
    if (images.length > 1) {
      const nextIndex = (activeIndex + 1) % images.length;
      handleControlClick(nextIndex);
    }
  };

  const handlePrevClick = () => {
    if (images.length > 1) {
      const prevIndex = (activeIndex - 1 + images.length) % images.length;
      handleControlClick(prevIndex);
    }
  };

  const handleControlClick = (nextIndex: number) => {
    if (nextIndex !== activeIndex && !transitionTimeoutRef.current) {
      preloadNextImage(nextIndex);

      setIsTransitioning(false); // This hides the current image to start transition

      transitionTimeoutRef.current = setTimeout(() => {
        onIndexChange(nextIndex); // Update parent's state to change image

        setTimeout(() => { // After image change, reveal the new image
          setIsTransitioning(true);
          transitionTimeoutRef.current = undefined;
        }, 300);
      }, 800);
    }
  };

  useEffect(() => {
    if (!revealedByDefault && !initialTransition) {
      setIsTransitioning(true);
      setInitialTransition(true);
    }
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [revealedByDefault, initialTransition]);

  if (images.length === 0) {
    return null;
  }

  return (
    <Flex fillWidth gap="12" direction="column" {...rest}>
      <div style={{ position: 'relative', width: '100%' }}> {/* Wrapper for buttons */}
        <RevealFx
          key={activeIndex} // <--- ADDED KEY PROP HERE
          onClick={handleNextClick} // Click on image can also go to next
          fillWidth
          trigger={isTransitioning}
          translateY="16"
          aspectRatio={aspectRatio}
          speed="fast"
        >
          <SmartImage
            sizes={sizes}
            priority
            radius="l"
            border="neutral-alpha-weak"
            alt={images[activeIndex]?.alt}
            aspectRatio={aspectRatio}
            src={images[activeIndex]?.src}
            style={{
              ...(images.length > 1 && {
                cursor: "pointer",
              }),
            }}
          />
        </RevealFx>

        {images.length > 1 && (
          <>
            {/* Left Button */}
            <button
              onClick={handlePrevClick}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: '4px', // Adjust for better visual centering of the arrow
              }}
              aria-label="Previous image"
            >
              &#8249; {/* Left arrow character */}
            </button>

            {/* Right Button */}
            <button
              onClick={handleNextClick}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: '4px', // Adjust for better visual centering of the arrow
              }}
              aria-label="Next image"
            >
              &#8250; {/* Right arrow character */}
            </button>
          </>
        )}
      </div> {/* End of wrapper for buttons */}

      {images.length > 1 && (
        <>
          {indicator === "line" ? (
            <Flex gap="4" paddingX="s" fillWidth horizontal="center">
              {images.map((_, index) => (
                <Flex
                  key={index}
                  onClick={() => handleControlClick(index)}
                  style={{
                    background:
                      activeIndex === index
                        ? "var(--neutral-on-background-strong)"
                        : "var(--neutral-alpha-medium)",
                    transition: "background 0.3s ease",
                  }}
                  cursor="interactive"
                  fillWidth
                  radius="full"
                  height="2"
                ></Flex>
              ))}
            </Flex>
          ) : (
            <Scroller fillWidth gap="4" onItemClick={handleControlClick}>
              {images.map((image, index) => (
                <Flex
                  key={index}
                  style={{
                    border: activeIndex === index ? "2px solid var(--brand-solid-strong)" : "none",
                    borderRadius: "var(--radius-m-nest-4)",
                    transition: "border 0.3s ease",
                  }}
                  cursor="interactive"
                  padding="4"
                  width="80"
                  height="80"
                >
                  <SmartImage
                    alt={image.alt}
                    aspectRatio="1 / 1"
                    sizes="120px"
                    src={image.src}
                    cursor="interactive"
                    radius="m"
                    transition="macro-medium"
                  />
                </Flex>
              ))}
            </Scroller>
          )}
        </>
      )}
    </Flex>
  );
};

Carousel.displayName = "Carousel";
export { Carousel };