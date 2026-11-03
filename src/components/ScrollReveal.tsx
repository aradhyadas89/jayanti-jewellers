"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  enable3D?: boolean;
  intensity?: "subtle" | "medium" | "deep";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  enable3D = true,
  intensity = "medium",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const get3DTransform = () => {
    if (!enable3D) {
      switch (direction) {
        case "up":
          return isVisible ? "translateY(0)" : "translateY(32px)";
        case "down":
          return isVisible ? "translateY(0)" : "translateY(-32px)";
        case "left":
          return isVisible ? "translateX(0)" : "translateX(32px)";
        case "right":
          return isVisible ? "translateX(0)" : "translateX(-32px)";
        default:
          return "none";
      }
    }

    if (isVisible) {
      return "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)";
    }

    const angle = intensity === "deep" ? 18 : intensity === "medium" ? 12 : 7;
    const offsetZ = intensity === "deep" ? -80 : intensity === "medium" ? -50 : -25;
    const offsetY = intensity === "deep" ? 55 : intensity === "medium" ? 38 : 22;

    switch (direction) {
      case "up":
        return `perspective(1200px) rotateX(${angle}deg) translate3d(0, ${offsetY}px, ${offsetZ}px) scale(0.96)`;
      case "down":
        return `perspective(1200px) rotateX(-${angle}deg) translate3d(0, -${offsetY}px, ${offsetZ}px) scale(0.96)`;
      case "left":
        return `perspective(1200px) rotateY(-${angle}deg) translate3d(${offsetY}px, 0, ${offsetZ}px) scale(0.96)`;
      case "right":
        return `perspective(1200px) rotateY(${angle}deg) translate3d(-${offsetY}px, 0, ${offsetZ}px) scale(0.96)`;
      default:
        return `perspective(1200px) rotateX(${angle}deg) translate3d(0, ${offsetY}px, ${offsetZ}px) scale(0.96)`;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transform: get3DTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${delay}ms`,
        transitionProperty: "transform, opacity",
        transitionDuration: "850ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
