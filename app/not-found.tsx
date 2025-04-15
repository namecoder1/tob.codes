'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft, FileWarning } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: '404 | tob.codes',
	description: 'Pagina non trovata',
	openGraph: {
		title: '404 | tob.codes',
		description: 'Pagina non trovata',
		images: [
			{ url: 'https://tob.codes/og-image.png' }
		]
	}
}

const NotFound = () => {
	const router = useRouter()
	return (
		<div className='min-h-screen flex flex-col items-center justify-center mx-5'>
			<h1 className='heading-lg mb-3 flex items-center'><FileWarning className="inline-block mr-2" size={40} />Errore 404</h1>
			<p className='max-w-sm text-sm text-center'>L’errore 404 significa che il <span className="font-bold">server</span> non riesce a trovare la pagina che stai cercando.
			Potrebbe essere dovuto a un <span className="font-bold">link errato</span>, un <span className="font-bold">contenuto rimosso</span> o uno <span className="font-bold">spostamento</span> della pagina.</p>
			<Button onClick={() => router.back()} className="mt-4 group"><ArrowLeft className="inline-block mr-1 group-hover:-translate-x-0.5 transition-transform" size={16} />Torna Indietro</Button>
		</div>
	)
}

export default NotFound