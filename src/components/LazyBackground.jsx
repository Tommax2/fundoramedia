import React, { useEffect, useRef, useState } from "react";

function LazyBackground({ className, image, overlay, fallback, children, eager }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(!!eager);

  useEffect(() => {
    if (eager) return;
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager]);

  const backgroundImage = visible && image
    ? `${overlay ? `${overlay}, ` : ""}url(${image})`
    : fallback || "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{ backgroundImage }}
    >
      {children}
    </div>
  );
}

export default LazyBackground;
