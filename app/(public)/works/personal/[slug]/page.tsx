import { client } from '@/sanity/lib/client'
import { PERS_WORK_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Undo, Github, ExternalLink } from 'lucide-react'
import TextBlock from '@/components/ui/text-block'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const work = await client.fetch(PERS_WORK_QUERY, { slug: params.slug })
	
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
			images: work.image ? [{ url: work.image }] : undefined
		},
		twitter: {
			card: 'summary_large_image',
			title: `${title} | tob.codes`,
			description,
			images: work.image ? [work.image] : undefined
		}
	}
}

const PersonalWorkPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params
	const persWork = await client.fetch(PERS_WORK_QUERY, { slug })

	if (!persWork) {
		return notFound()
	}

	return (
		<div className='fade-in-alternate max-w-5xl mx-auto'>
			<Button asChild className='mb-10 fade-in-left-alternate'>
				<Link href='/works'><Undo className='inline-block mr-2' />Torna ai progetti</Link>
			</Button>
			
			<div className='space-y-4'>
				<div className='flex items-center justify-between gap-4'>
					<h1 className='heading-lg'>{persWork.title}</h1>
					<span className='px-3 py-1 bg-black/5 rounded-full hidden sm:block text-sm'>{persWork.category}</span>
				</div>
			</div>

			<Separator className='mb-8 mt-4 bg-black/20' />

			{persWork.image && (
				<div className='relative group'>
					<Image 
						priority 
						src={persWork.image} 
						alt={persWork.imageAlt as string || persWork.title as string} 
						width={1200} 
						height={630} 
						className='w-full rounded-xl my-4 border shadow-sm transition-transform duration-300 group-hover:scale-[1.02]' 
						quality={100} 
					/>
					<div className='absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-xl' />
				</div>
			)}

			<div className='prose prose-lg dark:prose-invert max-w-4xl mx-auto pt-4'>
				<TextBlock value={persWork.body} />
			</div>

			<div className='flex gap-4 mt-12 flex-col sm:flex-row'>
				{persWork.github && (
					<Button asChild className='w-full hover:scale-105 transition-transform'>
						<Link target='_blank' href={persWork.github}>
							<Github className='mr-2' />GitHub
						</Link>
					</Button>
				)}
				{persWork.link && (
					<Button asChild className='w-full hover:scale-105 transition-transform'>
						<Link target='_blank' href={persWork.link}>
							<ExternalLink className='mr-2' />Visita il sito
						</Link>
					</Button>
				)}
			</div>
		</div>
	)
}

export default PersonalWorkPage