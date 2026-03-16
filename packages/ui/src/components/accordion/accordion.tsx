"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"

import { composeRefs, useInteractiveMotion } from "../../lib/motion"
import { cn } from "../../lib/utils"
import { ChevronDownIcon } from "lucide-react"
import styles from "./accordion.module.scss"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(styles.accordion, className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(styles.item, className)}
      {...props}
    />
  )
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.Trigger.Props
>(function AccordionTrigger({ className, children, ...props }, ref) {
  const motion = useInteractiveMotion<HTMLButtonElement>({ hoverY: -1, hoverScale: 1.005 })
  const {
    onBlur,
    onFocus,
    onPointerCancel,
    onPointerDown,
    onPointerEnter,
    onPointerLeave,
    onPointerUp,
    ...triggerProps
  } = props

  return (
    <AccordionPrimitive.Header className={styles.header}>
      <AccordionPrimitive.Trigger
        ref={composeRefs(ref, motion.ref)}
        data-slot="accordion-trigger"
        data-motion-trigger
        data-motion-managed="gsap"
        className={cn(styles.trigger, className)}
        onBlur={(event) => {
          onBlur?.(event)
          motion.handlers.onBlur?.(event)
        }}
        onFocus={(event) => {
          onFocus?.(event)
          motion.handlers.onFocus?.(event)
        }}
        onPointerCancel={(event) => {
          onPointerCancel?.(event)
          motion.handlers.onPointerCancel?.(event)
        }}
        onPointerDown={(event) => {
          onPointerDown?.(event)
          motion.handlers.onPointerDown?.(event)
        }}
        onPointerEnter={(event) => {
          onPointerEnter?.(event)
          motion.handlers.onPointerEnter?.(event)
        }}
        onPointerLeave={(event) => {
          onPointerLeave?.(event)
          motion.handlers.onPointerLeave?.(event)
        }}
        onPointerUp={(event) => {
          onPointerUp?.(event)
          motion.handlers.onPointerUp?.(event)
        }}
        {...triggerProps}
      >
        {children}
        <ChevronDownIcon data-slot="accordion-trigger-icon" className={styles.icon} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

AccordionTrigger.displayName = "AccordionTrigger"

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={styles.content}
      {...props}
    >
      <div className={cn(styles.contentInner, className)}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

