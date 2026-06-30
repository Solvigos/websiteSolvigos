"use client";

import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 30,
  duration = 70,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex",
          isHorizontal ? "w-max" : "flex-col h-max"
        )}
        style={{
          animation: `${duration}s linear infinite marquee-${isHorizontal ? "h" : "v"} ${reverse ? "reverse" : "normal"}`,
          animationPlayState: durationOnHover ? "running" : undefined,
        }}
        {...(durationOnHover
          ? {
              onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
                (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
              },
              onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
                (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
              },
            }
          : {})}
      >
        <div
          className={cn("flex shrink-0", isHorizontal ? "w-max" : "flex-col h-max")}
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
        <div
          className={cn("flex shrink-0", isHorizontal ? "w-max" : "flex-col h-max")}
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
