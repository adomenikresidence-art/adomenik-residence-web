"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Maximize2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Document, Page, pdfjs } from 'react-pdf'

// Configure PDF.js worker - Using unpkg as alternative to Cloudflare CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

interface PDFFloorPlanViewerProps {
  pdfUrl: string
  apartmentName: string
}

export default function PDFFloorPlanViewer({ pdfUrl, apartmentName }: PDFFloorPlanViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [scale, setScale] = useState(1.0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setIsLoading(false)
    setError(null)
  }

  function onDocumentLoadError(error: Error) {
    setError('Failed to load PDF. Please try again.')
    setIsLoading(false)
    console.error('PDF loading error:', error)
  }

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, numPages))
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
    setScale(1.0)
  }

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5))
  }

  const resetZoom = () => {
    setScale(1.0)
  }

  const downloadPDF = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${apartmentName}-floor-plans.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Main Floor Plan Viewer */}
      <Card className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <div>
              <h3 className="font-serif text-2xl font-semibold">Floor Plans</h3>
              <p className="text-sm text-foreground/60 mt-1">
                Page {currentPage} of {numPages || '...'}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant="outline"
                size="icon"
                onClick={zoomOut}
                disabled={scale <= 0.5}
                title="Zoom Out"
              >
                <ZoomOut size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={resetZoom}
                title="Reset Zoom"
              >
                <span className="text-xs">{Math.round(scale * 100)}%</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={zoomIn}
                disabled={scale >= 3}
                title="Zoom In"
              >
                <ZoomIn size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={openFullscreen}
                title="Fullscreen"
              >
                <Maximize2 size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={downloadPDF}
                title="Download PDF"
              >
                <Download size={20} />
              </Button>
            </div>
          </div>

          {/* PDF Display */}
          <div 
            className="relative bg-muted rounded-lg overflow-auto cursor-pointer border border-border"
            style={{ maxHeight: "600px" }}
            onClick={openFullscreen}
          >
            <div className="flex items-center justify-center min-h-[400px] p-4">
              {isLoading && (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-foreground/60">Loading floor plans...</p>
                </div>
              )}

              {error && (
                <div className="text-center text-red-500">
                  <p>{error}</p>
                </div>
              )}

              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading=""
                error=""
                options={{
                  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                  cMapPacked: true,
                }}
              >
                <Page
                  pageNumber={currentPage}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="mx-auto"
                />
              </Document>
            </div>

            {/* Navigation Arrows */}
            {numPages > 1 && !isLoading && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  disabled={currentPage === 1}
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
                  disabled={currentPage === numPages}
                >
                  <ChevronRight size={24} />
                </Button>
              </>
            )}

            {/* Page Counter */}
            {!isLoading && (
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentPage} / {numPages}
              </div>
            )}
          </div>

          {/* Page Navigation Buttons */}
          {numPages > 1 && !isLoading && (
            <div className="flex gap-2 justify-center flex-wrap">
              {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    page === currentPage
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  Page {page}
                </button>
              ))}
            </div>
          )}

          {/* Download Button */}
          {!isLoading && (
            <div className="flex justify-center pt-2">
              <Button variant="outline" className="gap-2" onClick={downloadPDF}>
                <Download size={16} />
                Download Complete Floor Plans (PDF)
              </Button>
            </div>
          )}
        </div>
      </Card>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          {/* Header Bar */}
          <div className="bg-black/80 backdrop-blur-sm p-4 flex justify-between items-center">
            <div className="text-white">
              <h3 className="font-semibold">Floor Plans</h3>
              <p className="text-sm opacity-80">{apartmentName} - Page {currentPage} of {numPages}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={zoomOut}
                disabled={scale <= 0.5}
              >
                <ZoomOut size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={resetZoom}
              >
                <span className="text-sm">{Math.round(scale * 100)}%</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={zoomIn}
                disabled={scale >= 3}
              >
                <ZoomIn size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={downloadPDF}
              >
                <Download size={20} />
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

          {/* Fullscreen PDF Display */}
          <div className="flex-1 flex items-center justify-center overflow-auto p-4">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading=""
              options={{
                cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                cMapPacked: true,
              }}
            >
              <Page
                pageNumber={currentPage}
                scale={scale}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="mx-auto"
              />
            </Document>
          </div>

          {/* Navigation Controls */}
          {numPages > 1 && (
            <>
              {/* Arrow Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={goToPrevious}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={32} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={goToNext}
                disabled={currentPage === numPages}
              >
                <ChevronRight size={32} />
              </Button>

              {/* Bottom Page Navigation */}
              <div className="bg-black/80 backdrop-blur-sm p-4">
                <div className="flex gap-2 justify-center flex-wrap max-w-screen-lg mx-auto">
                  {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        page === currentPage
                          ? "bg-white text-black"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      Page {page}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
