import React from 'react'

import { Images } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { PHOTOS_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
	AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Pin from '@/components/ui/pin'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Gallery | tob.codes',
	description: 'Galleria di immagini di Tobia Bartolomei',
	openGraph: {
		title: 'Gallery | tob.codes',
		description: 'Galleria di immagini di Tobia Bartolomei',
		images: [
			{ url: 'https://tob.codes/og-image.jpeg' }
		]
	}
}

// Add revalidation to ensure content is fresh
export const revalidate = 60

const GalleryPage = async () => {
	const images = await client.fetch(PHOTOS_QUERY)
	return (
		<section>
			<h1 className='fade-in-alternate heading-lg flex items-center justify-start gap-2.5'>
				<div className="inline-block">
          <div className="bg-[#dca25b] border-2 border-yellow-800/20 rounded-2xl flex p-[8px] w-fit">
            <Images className="inline-block" size={28} />
          </div>
        </div>
				Gallery
			</h1>
			<Separator className='my-6 bg-black/20' />
			<p className='mt-2 mb-3'>Questa sezione racchiude le mie foto preferite e quelle a cui sono legato. Alcune provengono da viaggi ed esperienze che ho fatto durante gli anni, altre hanno un valore sentimentale.</p>
			<p className='mt-2 mb-3'>Tutte le immagini sono state scattate con il mio telefono; alcune con un iPhone 11, mentre le più recenti provengono dal mio iPhone 15. </p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] mt-10 pb-10">
				{images.map((image, index) => {
					// Aggiungiamo classi personalizzate per rendere alcune immagini più grandi
					const specialClass =
						index % 7 === 0
							? 'md:col-span-2 md:row-span-2'
							: index % 3 === 0
							? 'md:col-span-2'
							: ''

					return (
						<AlertDialog key={image.id} >
							<AlertDialogTrigger className={`fade-in-alternate relative overflow-hidden rounded-xl ${specialClass}`}>
								<Image
									src={`${image.image}`}
									alt={image.imageAlt || 'Gallery Image'}
									fill
									priority
									sizes='300'
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
								<Pin className='absolute top-2 right-2 text-white bg-gray-900/80 border-black' title={image.imageAlt} />
							</AlertDialogTrigger>
							<AlertDialogContent aria-describedby='description' className='max-w-[350px] sm:max-w-lg h-1/2 rounded-lg'>
								<AlertDialogHeader>
									<AlertDialogTitle>
										<Image
											src={`${image.image}`}
											alt={image.imageAlt || 'Gallery Image'}
											fill
											sizes='200'
											className="object-cover w-full rounded-lg"
										/>
									</AlertDialogTitle>
								</AlertDialogHeader>
								<AlertDialogDescription>
									<span id='description' className='sr-only'>{image.description}</span>
								</AlertDialogDescription>
								<div className='absolute left-4 top-4 right-4 text-gray-950 bg-white/40 backdrop-blur-md py-1 pl-2 pr-1 rounded-lg'>
								<p className='line-clamp-2 max-w-full text-xs sm:line-clamp-3'>{image.description}</p>
								</div>
								<AlertDialogFooter className='absolute right-4 bottom-4'>
									<AlertDialogCancel>Chiudi</AlertDialogCancel>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					)
				})}
			</div>
		</section>
	)
}

export default GalleryPage