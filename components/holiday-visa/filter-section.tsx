"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, List } from "lucide-react"

interface FilterSectionProps {
  onViewChange: (view: "map" | "list") => void
  activeView: "map" | "list"
}

export function FilterSection({ onViewChange, activeView }: FilterSectionProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="search"
            placeholder="Search destinations..."
            className="pl-10 rounded-md bg-white w-full md:w-64"
          />
        </div>
        <Button variant="outline" className="bg-white text-[#0B1120] hover:bg-[#0B1120]/5 transition-colors">
          Clear
        </Button>
      </div>

      <div className="flex gap-4 md:ml-auto mt-4 md:mt-0">
        <Tabs
          value={activeView}
          onValueChange={(value) => onViewChange(value as "map" | "list")}
          className="w-[200px]"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="map" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <MapPin className="w-4 h-4 mr-2" /> Map
            </TabsTrigger>
            <TabsTrigger value="list" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <List className="w-4 h-4 mr-2" /> List
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
