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

const WorkPage = async ({ params } : { params: Promise<{slug: string}>}) => {
	const slug = (await params).slug
	const work = await client.fetch(WORK_QUERY, { slug })
	if(!work) {
		notFound();
	}

	// const wakaUser = '018edc23-7885-44d3-8b1a-efd38be8a6f6'
	return (
		<div className='fade-in-alternate'>
			<Button asChild className='mb-5 fade-in-left-alternate'><Link href='/blog'><Undo className='inline-block' />Torna indietro</Link></Button>
			<div>
				<div className='flex justify-between items-center'>
					<h1 className='heading-md max-w-40 sm:max-w-full'>{work.title}</h1>
					<Pin title={work.category} />
				</div>
			</div>
			<Separator className='my-8' />
			<Image priority src={`${work.image}`} alt={`${work.imageAlt}`} width={300} height={200} className='w-full rounded-xl my-4 border shadow-sm' quality={100} />
			<div className='max-w-4xl'>
				<TextBlock value={work.body} />
			</div>
			<Button asChild className='w-full my-4'><Link href='/about'>Contattami<MessageSquareMore className='inline-block' /></Link></Button>
		</div>
	)
}

export default WorkPage