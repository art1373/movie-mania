import React from "react";
import placeholder from "../../../assets/spinkit.gif";
import PropTypes from "prop-types";

const LazyImage = ({ src, className, alt, children }) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder);
  const [imageRef, setImageRef] = React.useState(null);

  React.useEffect(() => {
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
          { threshold: 0.01, rootMargin: "75%" }
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <>
      <div
        className={className}
        ref={setImageRef}
        style={{ backgroundImage: `url(${imageSrc})` }}
        alt={alt}
      >
        {children}
      </div>
      ;
    </>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};

export default LazyImage;
