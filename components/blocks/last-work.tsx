import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LastWork = ({ work } : any) => {
	const { 
		title,
		slug,
		excerpt,
		image,
		imageAlt,
		pubDate,
		category
	} = work
	return (
		<article className="group relative h-[500px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border border-white/10">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10" />
			<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 mix-blend-overlay" />
			
			<Image 
				priority 
				alt={imageAlt} 
				src={image} 
				fill
				className="object-cover transition-all duration-700 " 
			/>

			<div className="relative z-20 h-full flex flex-col justify-end p-8">
				<div className="flex items-center gap-4 text-sm text-white/80 mb-4">
					<time dateTime={pubDate} className="flex items-center backdrop-blur-md bg-white/10 px-3 py-1 rounded-full">
						<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						{formatDate(pubDate)}
					</time>
					<span className="flex items-center backdrop-blur-md bg-white/10 px-3 py-1 rounded-full">
						<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
						</svg>
						{category}
					</span>
				</div>

				<Link href={`/works/${slug}`} className="block group/link">
					<h3 className="text-3xl font-bold text-white mb-4 transform transition-all duration-500 ">
						{title}
					</h3>
					<p className="text-white/80 line-clamp-2 leading-relaxed mb-6 transform transition-all duration-500 ">
						{excerpt}
					</p>
					<div className="inline-flex items-center text-white/90 font-medium group-hover/link:text-white transition-colors">
						<span className="relative">
							Explore Project
							<span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/link:w-full"></span>
						</span>
						<svg className="w-5 h-5 ml-2 transform transition-transform duration-300 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
						</svg>
					</div>
				</Link>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
		</article>
	)
}

export default LastWork