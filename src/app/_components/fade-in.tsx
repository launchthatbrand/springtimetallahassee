"use client";

import * as React from "react";

type FadeInDirection = "up" | "down" | "left" | "right" | "none";
type FadeInAs = "div" | "section" | "article" | "header" | "footer" | "main" | "aside";

const getHiddenTransformClass = (direction: FadeInDirection) => {
  switch (direction) {
    case "up":
      return "translate-y-6";
    case "down":
      return "-translate-y-6";
    case "left":
      return "translate-x-6";
    case "right":
      return "-translate-x-6";
    case "none":
    default:
      return "";
  }
};

export type FadeInProps = {
  // NOTE: we intentionally keep `as` to common HTML tags to avoid `ref` typing issues in strict TS.
  as?: FadeInAs;
  children: React.ReactNode;
  className?: string;
  direction?: FadeInDirection;
  delayMs?: number;
  durationMs?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
} & React.HTMLAttributes<HTMLElement>;

export const FadeIn = ({
  as = "div",
  children,
  className,
  direction = "up",
  delayMs = 0,
  durationMs = 700,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  style,
  ...props
}: FadeInProps) => {
  const Component = as;
  const ref = React.useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const hiddenTransformClass = getHiddenTransformClass(direction);

  return (
    <Component
      ref={(node) => {
        ref.current = node;
      }}
      className={[
        "motion-reduce:transform-none motion-reduce:transition-none",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransformClass}`,
        "transition-[opacity,transform] ease-out will-change-transform",
        className ?? "",
      ].join(" ")}
      style={{
        transitionDelay: `${Math.max(0, delayMs)}ms`,
        transitionDuration: `${Math.max(0, durationMs)}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

