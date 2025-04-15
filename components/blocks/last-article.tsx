import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import Pin from '../ui/pin'
import Link from 'next/link'

const LastArticle = ({ article, showTitle = true } : any) => {
	const {
		title,
		slug,
		excerpt,
		image,
		imageAlt,
		pubDate,
		category
	} = article


	if (showTitle) {
		return (
			<div className='fade-in-left-alternate border border-black/20 bg-[#f3f3f3] rounded-3xl p-5 relative mt-6'>
				<h2 className='heading-md absolute -top-5 left-4 bg-[#f3f3f3] px-3 py-1 border border-black/20 rounded-2xl flex items-center gap-2'>
				Ultimo Articolo
			</h2>
			<article className='mt-6'>
				<Link href={`/blog/${category.slug}/${slug}`} className='flex flex-col-reverse w-full items-center gap-3 lg:grid lg:grid-cols-2 lg:items-start justify-center lg:gap-5'>
					<div>
						<h2 className='heading-md my-3'>{title}</h2>
						<p className='flex items-center justify-start gap-1.5 border rounded-xl border-black/20 px-3 py-1 my-2 w-fit '>{formatDate(pubDate)}</p>
						<p className='line-clamp-3 lg:max-w-lg pt-2 md:pt-0'>{excerpt}</p>
					</div>
					<div className="relative w-full aspect-[16/9]">
						<Image 
							priority 
							src={image} 
							alt={imageAlt} 
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className='object-cover shadow-md rounded-xl border border-gray-300' 
						/>			
						<Pin className="absolute top-3 right-3" title={category.title}/>
					</div>
				</Link>
			</article>
		</div>
		)
	}

	return (
		<article className='fade-in-left-alternate border bg-[#f3f3f3] border-black/20 rounded-3xl p-5 relative mt-6'>
			<Link href={`/blog/${category.slug}/${slug}`} className='flex flex-col-reverse w-full items-center gap-3 lg:grid lg:grid-cols-2 lg:items-start justify-center lg:gap-5'>
				<div>
					<h2 className='heading-md my-3'>{title}</h2>
					<p className='flex items-center justify-start gap-1.5 border rounded-xl border-black/20 px-3 py-1 my-2 w-fit '>{formatDate(pubDate)}</p>
					<p className='line-clamp-3 lg:max-w-lg pt-2 md:pt-0'>{excerpt}</p>
				</div>
				<div className="relative w-full aspect-[16/9]">
					<Image 
						priority 
						src={image} 
						alt={imageAlt} 
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className='object-cover shadow-md rounded-xl border border-gray-300' 
					/>			
					<Pin className="absolute top-3 right-3" title={category.title}/>
				</div>
			</Link>
		</article>
	)
}

export default LastArticle