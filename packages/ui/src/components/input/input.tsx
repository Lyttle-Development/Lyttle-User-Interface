import * as React from "react"

import { cn } from "../../lib/utils"
import styles from "./input.module.scss"

const Input = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<"input">>(
  function Input({ className, type, ...props }, ref) {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(styles.input, className)}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }

