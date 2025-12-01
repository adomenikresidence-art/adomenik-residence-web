"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface FloorPlanViewerProps {
  floorPlans: {
    image: string
    title: string
    description?: string
  }[]
  apartmentName: string
}

export default function FloorPlanViewer({ floorPlans, apartmentName }: FloorPlanViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [zoom, setZoom] = useState(1)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? floorPlans.length - 1 : prevIndex - 1
    )
    setZoom(1) // Reset zoom when changing plans
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === floorPlans.length - 1 ? 0 : prevIndex + 1
    )
    setZoom(1) // Reset zoom when changing plans
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setZoom(1)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
    setZoom(1)
  }

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3))
  }

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5))
  }

  const resetZoom = () => {
    setZoom(1)
  }

  return (
    <>
      {/* Main Floor Plan Viewer */}
      <Card className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-serif text-2xl font-semibold">Floor Plans</h3>
              <p className="text-sm text-foreground/60 mt-1">
                {floorPlans[currentIndex].title}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={zoomOut}
                disabled={zoom <= 0.5}
              >
                <ZoomOut size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={zoomIn}
                disabled={zoom >= 3}
              >
                <ZoomIn size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={openFullscreen}
              >
                <Maximize2 size={20} />
              </Button>
            </div>
          </div>

          {/* Floor Plan Display */}
          <div 
            className="relative bg-muted rounded-lg overflow-auto cursor-pointer"
            style={{ maxHeight: "600px" }}
            onClick={openFullscreen}
          >
            <div className="flex items-center justify-center min-h-[400px] p-4">
              <img
                src={floorPlans[currentIndex].image}
                alt={`${apartmentName} - ${floorPlans[currentIndex].title}`}
                className="max-w-full h-auto transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            {/* Plan Counter */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {floorPlans.length}
            </div>

            {/* Navigation Arrows */}
            {floorPlans.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                >
                  <ChevronLeft size={24} />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                >
                  <ChevronRight size={24} />
                </Button>
              </>
            )}
          </div>

          {/* Description */}
          {floorPlans[currentIndex].description && (
            <p className="text-sm text-foreground/70 text-center">
              {floorPlans[currentIndex].description}
            </p>
          )}

          {/* Thumbnail Navigation */}
          {floorPlans.length > 1 && (
            <div className="flex gap-2 justify-center flex-wrap">
              {floorPlans.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === currentIndex
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>
          )}

          {/* Download Button */}
          <div className="flex justify-center pt-2">
            <Button variant="outline" className="gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download All Floor Plans (PDF)
            </Button>
          </div>
        </div>
      </Card>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          {/* Header Bar */}
          <div className="absolute top-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 flex justify-between items-center">
            <div className="text-white">
              <h3 className="font-semibold">{floorPlans[currentIndex].title}</h3>
              <p className="text-sm opacity-80">{apartmentName}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={zoomOut}
                disabled={zoom <= 0.5}
              >
                <ZoomOut size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={resetZoom}
              >
                <span className="text-sm">{Math.round(zoom * 100)}%</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={zoomIn}
                disabled={zoom >= 3}
              >
                <ZoomIn size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={closeFullscreen}
              >
                <X size={24} />
              </Button>
            </div>
          </div>

          {/* Fullscreen Floor Plan */}
          <div className="relative w-full h-full flex items-center justify-center p-20 overflow-auto">
            <img
              src={floorPlans[currentIndex].image}
              alt={`${apartmentName} - ${floorPlans[currentIndex].title}`}
              className="max-w-full max-h-full object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
            />

            {/* Plan Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              {currentIndex + 1} / {floorPlans.length}
            </div>

            {/* Navigation Arrows */}
            {floorPlans.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={goToPrevious}
                >
                  <ChevronLeft size={32} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={goToNext}
                >
                  <ChevronRight size={32} />
                </Button>
              </>
            )}
          </div>

          {/* Bottom Thumbnail Strip */}
          {floorPlans.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-screen-lg overflow-x-auto px-4 pb-2">
              {floorPlans.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === currentIndex
                      ? "bg-white text-black"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
