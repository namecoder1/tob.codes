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
		<article className="fade-in-left-alternate relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
		<Image priority alt={imageAlt} src={image} width={400} height={300} className="absolute inset-0 -z-10 size-full object-cover aspect-square md:aspect-video" />
		<div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-gray-950/60" />
		<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

		<div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
			<time dateTime={pubDate} className="mr-8">
				{formatDate(pubDate)}
			</time>
			<div className="-ml-4 flex items-center gap-x-4">
				<svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
					<circle r={1} cx={1} cy={1} />
				</svg>
				<div className="flex gap-x-2.5">
					{category}
				</div>
			</div>
		</div>
		<h3 className="mt-3 text-lg/6 font-semibold text-white">
			<Link href={`/works/${slug}`}>
				<span className="absolute inset-0" />
				{title}
			</Link>
		</h3>
		<p className='line-clamp-3 text-gray-300 mt-2'>{excerpt}</p>
	</article>

	)
}

export default LastWork