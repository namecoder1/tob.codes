import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Pin from '../ui/pin'
import { Button } from '../ui/button'

import { BookOpenText } from "lucide-react"

const WorkCard = ({ work } : any ) => {
	const { title, slug, image, pubDate, excerpt } = work
	return (
		<div className='fade-in-left-alternate'>
			<div className="relative">
				<Image priority src={image} alt="Work Wallpaper" width={400} height={300} className="w-full rounded-xl border" />
				<Pin className="absolute top-3 left-3 md:hidden text-white" title={formatDate(pubDate)}/>
			</div>
			<div className='mt-3 grid grid-cols-1 md:grid-cols-2'>
				<div className='flex flex-col'>
					<h2 className='text-[28px] font-semibold'>{title}</h2>	
					<Pin className='hidden md:block' title={formatDate(pubDate)} />
				</div>
				<p className='line-clamp-4 mt-1'>{excerpt}</p>
			</div>
			<Button asChild className='w-full my-2'>
				<Link href={`/works/${slug}`} className='flex items-center justify-center gap-1.5'>
					<BookOpenText className='inline-block' />
					Leggi ora
				</Link>
			</Button>
		</div>
	)
}

export default WorkCard