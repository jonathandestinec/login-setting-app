import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "caret-pink-500 border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 ...",
        className
      )}
      
      {...props}
    />
  )
}

export { Textarea }
