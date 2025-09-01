"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const TabsRoot = TabsPrimitive.Root

const TabList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-lg p-1 bg-gray-800/50",
      className
    )}
    {...props}
  />
))

const TabTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md",
      className
    )}
    {...props}
  />
))

const TabPanel = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2",
      className
    )}
    {...props}
  />
))

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsRoot> {}
export interface TabListProps extends React.ComponentPropsWithoutRef<typeof TabList> {}
export interface TabTriggerProps extends React.ComponentPropsWithoutRef<typeof TabTrigger> {}
export interface TabPanelProps extends React.ComponentPropsWithoutRef<typeof TabPanel> {}

TabList.displayName = "TabList"
TabTrigger.displayName = "TabTrigger"
TabPanel.displayName = "TabPanel"

export {
  TabsRoot as Tabs,
  TabList as TabsList,
  TabTrigger as TabsTrigger,
  TabPanel as TabsContent,
}
