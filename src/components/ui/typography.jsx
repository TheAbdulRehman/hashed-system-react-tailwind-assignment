import React from "react";
import { cn } from "@/lib/utils";

export const Heading5xl = ({ children, className, ...props }) => (
  <h1 className={cn("text-5xl leading-tight", className)} {...props}>
    {children}
  </h1>
);

export const Heading4xl = ({ children, className, ...props }) => (
  <h2 className={cn("text-4xl leading-tight", className)} {...props}>
    {children}
  </h2>
);
export const Heading3xl = ({ children, className, ...props }) => (
  <h3 className={cn("text-3xl leading-tight", className)} {...props}>
    {children}
  </h3>
);

export const Heading2xl = ({ children, className, ...props }) => (
  <h4 className={cn("text-2xl leading-tight", className)} {...props}>
    {children}
  </h4>
);

export const HeadingXl = ({ children, className, ...props }) => (
  <h5 className={cn("text-xl leading-tight", className)} {...props}>
    {children}
  </h5>
);
export const HeadingMd = ({ children, className, ...props }) => (
  <h6 className={cn("text-md leading-tight", className)} {...props}>
    {children}
  </h6>
);

export const HeadingBase = ({ children, className, ...props }) => (
  <h6 className={cn("text-base leading-tight", className)} {...props}>
    {children}
  </h6>
);

export const BodyMd = ({ children, className, ...props }) => (
  <p className={cn("text-md leading-normal", className)} {...props}>
    {children}
  </p>
);
export const BodyBase = ({ children, className, ...props }) => (
  <p className={cn("text-base leading-normal", className)} {...props}>
    {children}
  </p>
);

export const BodySm = ({ children, className, ...props }) => (
  <p className={cn("text-sm leading-normal", className)} {...props}>
    {children}
  </p>
);

export const BodyXs = ({ children, className, ...props }) => (
  <p className={cn("text-[12px] leading-normal", className)} {...props}>
    {children}
  </p>
);

export const BodyXxs = ({ children, className, ...props }) => (
  <p className={cn("text-[10px] leading-normal", className)} {...props}>
    {children}
  </p>
);
