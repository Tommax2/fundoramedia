import React, { useEffect, useRef, useState } from "react";

function LazyBackground({ className, image, overlay, fallback, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "220px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const backgroundImage = visible && image
    ? `${overlay ? `${overlay}, ` : ""}url(${image})`
    : fallback;

  return (
    <div ref={ref} className={className} style={{ backgroundImage }}>
      {children}
    </div>
  );
}

export default LazyBackground;
