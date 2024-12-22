'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { FileWarning } from "lucide-react"

const NotFound = () => {
	const router = useRouter()
	return (
		<div className='min-h-screen flex flex-col items-center justify-center mx-5'>
			<h1 className='heading-lg mb-3 flex items-center'><FileWarning className="inline-block mr-2" size={40} />Errore 404</h1>
			<p className='max-w-lg text-center leading-7'>L’errore 404 significa che il server non riesce a trovare la pagina che stai cercando.
			Potrebbe essere dovuto a un link errato, un contenuto rimosso o uno spostamento della pagina.</p>
			<Button onClick={() => router.back()} className="mt-4">Torna Indietro</Button>
		</div>
	)
}

export default NotFound