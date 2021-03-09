import { useEffect, useState } from "react";
import styled from "styled-components";

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const ImageC = styled.img`
  width: 100%;
  cursor: pointer;
  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  // I use utilitary classes instead of props to avoid style regenerating
  &.loaded:not(.has-error) {
    width: 100%;
    cursor: pointer;
    animation: loaded 300ms ease-in-out;
  }
  &.has-error {
    width: 100%;
    cursor: pointer;
    // fallback to placeholder image on error
    content: url(${placeHolder});
  }
`;

const Image = ({ src }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();

  const onLoad = (event) => {
    event.target.classList.add("loaded");
  };

  const onError = (event) => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "0px",
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <ImageC
      ref={setImageRef}
      src={imageSrc}
      alt={""}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default Image;
