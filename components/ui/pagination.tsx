import { Button } from "./button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {currentPage > 1 && (
        <Button asChild variant="outline" size="icon">
          <Link href={`${baseUrl}?page=${currentPage - 1}`}>
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
      )}
      
      {pages.map((page) => (
        <Button
          key={page}
          asChild
          variant={currentPage === page ? "default" : "outline"}
          size="icon"
        >
          <Link href={`${baseUrl}?page=${page}`}>
            {page}
          </Link>
        </Button>
      ))}
      
      {currentPage < totalPages && (
        <Button asChild variant="outline" size="icon">
          <Link href={`${baseUrl}?page=${currentPage + 1}`}>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
} 