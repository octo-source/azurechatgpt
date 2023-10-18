import React from 'react';
import * as TooltipPrimitives from '@radix-ui/react-tooltip';

const TooltipProvider = TooltipPrimitives.Provider

const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Root> &
    React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Content>
>(({ ...props }, ref) => {
  return (
    <TooltipPrimitives.Root
      open={props.open}
      defaultOpen={props.defaultOpen}
      onOpenChange={props.onOpenChange}
    >
      <TooltipPrimitives.Trigger asChild>
        {props.children}
      </TooltipPrimitives.Trigger>
      <TooltipPrimitives.Content className="TooltipContent" side="right" align="center" {...props}>
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
  