"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import styles from "./button.module.scss"

const buttonVariants = cva(
  styles.button,
  {
    variants: {
      variant: {
        default: styles.variantDefault,
        outline: styles.variantOutline,
        secondary: styles.variantSecondary,
        ghost: styles.variantGhost,
        destructive: styles.variantDestructive,
        link: styles.variantLink,
      },
      size: {
        default: styles.sizeDefault,
        xs: styles.sizeXs,
        sm: styles.sizeSm,
        lg: styles.sizeLg,
        icon: styles.sizeIcon,
        "icon-xs": styles.sizeIconXs,
        "icon-sm": styles.sizeIconSm,
        "icon-lg": styles.sizeIconLg,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "default", size = "default", asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button, buttonVariants }

