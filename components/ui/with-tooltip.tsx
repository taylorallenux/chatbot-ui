import React, { FC } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "./tooltip"

interface WithTooltipProps extends React.ComponentPropsWithoutRef<"span"> {
  display: React.ReactNode
  trigger: React.ReactNode

  delayDuration?: number
  side?: "left" | "right" | "top" | "bottom"
}

export const WithTooltip = React.forwardRef<HTMLSpanElement, WithTooltipProps>(
  (
    {
      display,
      trigger,
      delayDuration = 500,
      side = "right",
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <TooltipProvider delayDuration={delayDuration}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span
              ref={ref}
              className={`inline-flex items-center ${className ?? ""}`}
              tabIndex={0}
              {...rest}
            >
              {trigger}
            </span>
          </TooltipTrigger>

          <TooltipContent side={side}>{display}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
)

WithTooltip.displayName = "WithTooltip"
