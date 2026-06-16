"use client";

import * as React from "react";

/**
 * Minimal `Slot` implementation (no Radix dependency).
 * Merges its own props onto a single child element so components can opt into
 * the `asChild` pattern — e.g. rendering a <Button> as an <a> or <Link>.
 */
export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...slotProps }, ref) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    const child = children as React.ReactElement<Record<string, unknown>>;
    const childProps = child.props;

    return React.cloneElement(child, {
      ...slotProps,
      ...childProps,
      className: [
        (slotProps as { className?: string }).className,
        (childProps as { className?: string }).className,
      ]
        .filter(Boolean)
        .join(" "),
      ref,
    } as Record<string, unknown>);
  }
);
Slot.displayName = "Slot";
