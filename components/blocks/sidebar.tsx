'use client'
import { cn } from "@/lib/utils"
import Image from "next/image"

import tobi from '@/assets/tobi.png'
import { Earth } from "lucide-react"
import Pin from "../ui/pin"


export function Sidebar() {
  const sections = [
    { id: 'intro', title: 'Introduzione' },
    { id: 'skills', title: 'Competenze' },
    { id: 'experience', title: 'Esperienza' },
    { id: 'projects', title: 'Progetti' },
    { id: 'contact', title: 'Contatti' },
  ]

  // Scroll smooth via JavaScript
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <aside className="fade-in-left-alternate w-72 hidden sm:block rounded-lg shadow-xl bg-white/40 backdrop-blur-md h-fit overflow-y-auto p-4 border-r">
      <div className="px-4 flex flex-col items-start justify-center mb-4">
        <Image src={tobi} className="rounded-full border content-center p-2 bg-gray-100 border-black/20 w-1/2" width={100} height={100} alt="Foto Tobia Bartolomei" />
        <p className="flex items-center justify-start gap-1 my-4 text-sm"><Earth className="inline-block" size={15} />Pesaro, Italy</p>
        <div className="flex gap-1.5">
          <Pin title='Italian' />
          <Pin title='English' />
        </div>
      </div>
      <nav className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleSmoothScroll(e, section.id)}
            className=
              "block py-2 px-4 rounded-md transition-colors"
            >
            {section.title}
          </a>
        ))}
      </nav>
    </aside>
  )
}