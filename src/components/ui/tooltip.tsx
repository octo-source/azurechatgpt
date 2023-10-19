import React from 'react';
import * as TooltipPrimitives from '@radix-ui/react-tooltip';
import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitives.Provider

// A tooltip that appears when hovering over an element.
const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Root> &
    React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Content>
>(({ className, side = "right", align = "center", ...props }, ref) => {
  return (
    <TooltipPrimitives.Root
      open={props.open}
      defaultOpen={props.defaultOpen}
      onOpenChange={props.onOpenChange}
    >
      <TooltipPrimitives.Trigger asChild>
        {props.children}
      </TooltipPrimitives.Trigger>
      <TooltipPrimitives.Content className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
        side={side} align={align} {...props}>
        {props.content}
        <TooltipPrimitives.Arrow className="TooltipArrow" width={11} height={5} />
      </TooltipPrimitives.Content>
    </TooltipPrimitives.Root>
  );
});
Tooltip.displayName = "Tooltip"

export {
    TooltipProvider,
    Tooltip,
}
  