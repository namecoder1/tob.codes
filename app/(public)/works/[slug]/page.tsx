import { client } from '@/sanity/lib/client'
import { WORK_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { notFound } from 'next/navigation';
import TextBlock from '@/components/ui/text-block'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Undo } from 'lucide-react'
import Pin from '@/components/ui/pin'

import { MessageSquareMore } from 'lucide-react'
import { Metadata } from 'next'

// Add revalidation to ensure content is fresh
export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const work = await client.fetch(WORK_QUERY, { slug: params.slug })
	
	if (!work) {
		return {
			title: 'Progetto non trovato',
			description: 'Il progetto richiesto non è stato trovato'
		}
	}

	const description = work.excerpt?.slice(0, 155) + '...' || 'Nessuna descrizione disponibile'
	const title = work.title || 'Progetto non trovato'

	return {
		title: `${title} | tob.codes`,
		description,
		openGraph: {
			title: `${title} | tob.codes`,
			description,
			type: 'article',
			authors: ['Tobia Bartolomei'],
			images: work.image || undefined
		},
		twitter: {
			card: 'summary_large_image',
			title: `${title} | tob.codes`,
			description,
			images: work.image || undefined
		}
	}
}

const WorkPage = async ({ params } : { params: Promise<{slug: string}>}) => {
	const slug = (await params).slug
	const work = await client.fetch(WORK_QUERY, { slug })
	if(!work) {
		notFound();
	}

	return (
		<div className='fade-in-alternate'>
			<Button asChild className='mb-10 fade-in-left-alternate'><Link href='/blog'><Undo className='inline-block' />Torna indietro</Link></Button>
			<div>
				<div className='flex justify-between items-center'>
					<h1 className='heading-md max-w-40 sm:max-w-full'>{work.title}</h1>
					<Pin title={work.category} />
				</div>
			</div>
			<Separator className='mb-8 mt-4 bg-black/20' />
			<Image priority src={`${work.image}`} alt={`${work.imageAlt}`} width={300} height={200} className='w-full rounded-xl my-4 border shadow-sm' quality={100} />
			<div className='max-w-4xl'>
				<TextBlock value={work.body} />
			</div>
			<div className='flex gap-2 mt-4 flex-col sm:flex-row'>
				<Button asChild className='w-full'><Link href='/about'>Contattami<MessageSquareMore className='inline-block' /></Link></Button>
				<Button asChild className='w-full'><Link target='_blank' href={`${work.link}`}>Visita il sito<MessageSquareMore className='inline-block' /></Link></Button>
			</div>
		</div>
	)
}

export default WorkPage