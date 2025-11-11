"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundLightProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackgroundLight = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundLightProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      {/* Aurora effect - only visible in light mode */}
      <div className="absolute inset-0 overflow-hidden light:block dark:hidden">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-400)_10%,var(--cyan-300)_15%,var(--teal-300)_20%,var(--blue-300)_25%,var(--indigo-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-40 will-change-transform`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
