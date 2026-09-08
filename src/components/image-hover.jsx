import { useEffect, useRef, useState } from "react";

function ImageHover({
  src,
  alt = "",
  className = "",
}) {
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const fadeTimeoutRef = useRef(null);

  const current = useRef({
    x: 50,
    y: 50,
    tiltX: 0,
    tiltY: 0,
    scale: 1,
    shadowX: 0,
    shadowY: 10,
    shadowBlur: 30,
    shadowOpacity: 0.08,
    opacity: 0,
  });

  const target = useRef({
    x: 50,
    y: 50,
    tiltX: 0,
    tiltY: 0,
    scale: 1,
    shadowX: 0,
    shadowY: 10,
    shadowBlur: 30,
    shadowOpacity: 0.08,
    opacity: 0,
  });

  const [style, setStyle] = useState({
    x: 50,
    y: 50,
    tiltX: 0,
    tiltY: 0,
    scale: 1,
    shadowX: 0,
    shadowY: 10,
    shadowBlur: 30,
    shadowOpacity: 0.08,
    opacity: 0,
  });

  useEffect(() => {
    const animate = () => {
      const currentValue = current.current;
      const targetValue = target.current;

      // Kecepatan smoothing utama
      const positionSmoothing = 0.12;
      const tiltSmoothing = 0.1;
      const scaleSmoothing = 0.1;
      const shadowSmoothing = 0.1;
      const opacitySmoothing = 0.12;

      // Spotlight
      currentValue.x +=
        (targetValue.x - currentValue.x) * positionSmoothing;

      currentValue.y +=
        (targetValue.y - currentValue.y) * positionSmoothing;

      // Tilt
      currentValue.tiltX +=
        (targetValue.tiltX - currentValue.tiltX) * tiltSmoothing;

      currentValue.tiltY +=
        (targetValue.tiltY - currentValue.tiltY) * tiltSmoothing;

      // Scale
      currentValue.scale +=
        (targetValue.scale - currentValue.scale) * scaleSmoothing;

      // Shadow
      currentValue.shadowX +=
        (targetValue.shadowX - currentValue.shadowX) * shadowSmoothing;

      currentValue.shadowY +=
        (targetValue.shadowY - currentValue.shadowY) * shadowSmoothing;

      currentValue.shadowBlur +=
        (targetValue.shadowBlur - currentValue.shadowBlur) *
        shadowSmoothing;

      currentValue.shadowOpacity +=
        (targetValue.shadowOpacity - currentValue.shadowOpacity) *
        shadowSmoothing;

      // Spotlight opacity
      currentValue.opacity +=
        (targetValue.opacity - currentValue.opacity) *
        opacitySmoothing;

      setStyle({
        ...currentValue,
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);

      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    // Batalkan fade sebelumnya
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;
    }

    target.current.opacity = 1;
    target.current.scale = 1.015;

    target.current.shadowBlur = 50;
    target.current.shadowOpacity = 0.18;
  };

  const handleMouseMove = (event) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();

    // Posisi cursor dalam persentase
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    target.current.x = x;
    target.current.y = y;

    // Normalisasi posisi cursor menjadi -1 sampai 1
    const normalizedX = (x - 50) / 50;
    const normalizedY = (y - 50) / 50;

    // Maksimal tilt
    const maxTilt = 5;

    target.current.tiltX = normalizedY * -maxTilt;
    target.current.tiltY = normalizedX * maxTilt;

    // Shadow mengikuti arah cursor
    const maxShadowOffset = 12;

    target.current.shadowX = normalizedX * -maxShadowOffset;
    target.current.shadowY = normalizedY * -maxShadowOffset + 15;
  };

  const handleMouseLeave = () => {
    // Spotlight kembali ke tengah
    target.current.x = 50;
    target.current.y = 50;

    // Tilt kembali ke posisi normal
    target.current.tiltX = 0;
    target.current.tiltY = 0;

    // Scale kembali normal
    target.current.scale = 1;

    // Shadow kembali normal
    target.current.shadowX = 0;
    target.current.shadowY = 10;
    target.current.shadowBlur = 30;
    target.current.shadowOpacity = 0.08;

    // Fade spotlight setelah mulai kembali ke tengah
    fadeTimeoutRef.current = setTimeout(() => {
      target.current.opacity = 0;
      fadeTimeoutRef.current = null;
    }, 250);
  };

  return (
    <div className="perspective-[1000px]">
      <div
        ref={imageRef}
        className={`relative overflow-hidden rounded-2xl ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `
            rotateX(${style.tiltX}deg)
            rotateY(${style.tiltY}deg)
            scale(${style.scale})
          `,
          transformStyle: "preserve-3d",
          boxShadow: `
            ${style.shadowX}px
            ${style.shadowY}px
            ${style.shadowBlur}px
            rgba(0, 0, 0, ${style.shadowOpacity})
          `,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />

        {/* Dimming + Spotlight */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: style.opacity,
            background: `
              radial-gradient(
                circle at ${style.x}% ${style.y}%,
                rgba(255, 255, 255, 0.28) 0%,
                rgba(255, 255, 255, 0.18) 10%,
                rgba(0, 0, 0, 0.18) 28%,
                rgba(0, 0, 0, 0.38) 55%,
                rgba(0, 0, 0, 0.52) 100%
              )
            `,
          }}
        />
      </div>
    </div>
  );
}

export default ImageHover;