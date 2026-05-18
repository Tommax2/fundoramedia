import React, { useEffect, useRef, useState } from "react";

function LazyBackground({ className, image, overlay, fallback, children }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            if (!image) { setLoaded(true); return; }
            const img = new Image();
            img.onload = () => setLoaded(true);
            img.onerror = () => setLoaded(true);
            img.src = image;
          }
        });
      },
      { rootMargin: "300px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [image]);

  const backgroundImage = loaded && image
    ? `${overlay ? `${overlay}, ` : ""}url(${image})`
    : fallback || "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage,
        transition: loaded ? "background-image 0s, opacity 0.4s ease" : undefined,
        opacity: loaded || !image ? 1 : 0.85,
      }}
    >
      {children}
    </div>
  );
}

export default LazyBackground;
