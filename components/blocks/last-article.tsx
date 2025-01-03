import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import Pin from '../ui/pin'

import { CalendarPlus } from 'lucide-react'
import Link from 'next/link'

const LastArticle = ({ article } : any) => {
	const {
		title,
		slug,
		excerpt,
		image,
		imageAlt,
		pubDate,
		category
	} = article
	return (
		<article className='fade-in-left-alternate'>
			<Link href={`/blog/${category.slug}/${slug}`} className='flex flex-col-reverse w-full items-center gap-3 lg:grid lg:grid-cols-2 lg:items-start justify-center lg:gap-5'>
				<div>
					<h2 className='heading-md my-3'>{title}</h2>
					<p className='flex items-center justify-start gap-1.5 border rounded-xl border-black/20 px-3 py-1 my-2 w-fit '><CalendarPlus className='inline-block' />{formatDate(pubDate)}</p>
					<p className='line-clamp-3 lg:max-w-lg pt-2 md:pt-0'>{excerpt}</p>
				</div>
				<div className="relative w-full -z-0">
					<Image priority src={image} alt={imageAlt} width={500} height={400} className='w-full shadow-md rounded-xl border border-gray-300' />			
					<Pin className="absolute top-3 right-3" title={category.title}/>
				</div>
			</Link>
		</article>
	)
}

export default LastArticle