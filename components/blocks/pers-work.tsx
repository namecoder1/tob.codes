import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FolderCode, GithubIcon, Link2Icon } from 'lucide-react'

const PersWorkCard = ({ persWork }: any) => {
	const { title, slug, pubDate, excerpt, image, imageAlt, category, link, github } = persWork
	return (
		<article className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-4 md:p-5 bg-white backdrop-blur-sm rounded-3xl border border-gray-500/10 hover:border-gray-500/20 transition-all duration-500">
			<Link href={`works/personal/${slug}`} className="col-span-1 md:col-span-5 relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden border-2 border-gray-500/10 group/image">
				<Image 
					src={image} 
					alt={imageAlt} 
					fill
					className="object-cover transition-transform duration-700 group-hover/image:scale-110" 
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
			</Link>
			
			<div className="col-span-1 md:col-span-7 flex flex-col justify-between">
				<div>
					<div className="flex items-center gap-2 mb-3 md:mb-4">
						<span className="text-[10px] uppercase tracking-widest text-gray-600">
							{category}
						</span>
						<span className="text-gray-400/20">/</span>
						<time className="text-[10px] uppercase tracking-widest text-gray-600">
							{pubDate}
						</time>
					</div>
					<Link href={`works/personal/${slug}`} className="group/title">
						<h3 className="text-xl md:text-2xl font-light mb-2 md:mb-3 group-hover/title:text-gray-900">
							{title}
						</h3>
						<p className="text-sm leading-relaxed line-clamp-2 md:line-clamp-4 mb-3 md:mb-4 text-gray-500/80">
							{excerpt}
						</p>
					</Link>
					<div className="flex flex-wrap gap-2 text-gray-500">
						<Link href={github} target='_blank' className='px-2 py-1 bg-gray-500/10 rounded-full hover:bg-gray-500/20 transition-colors'>
							<span className="text-xs flex items-center gap-1"><GithubIcon size={16} />GitHub</span>
						</Link>
						<Link href={link} target='_blank' className='px-2 py-1 bg-gray-500/10 rounded-full hover:bg-gray-500/20 transition-colors'>
							<span className="text-xs flex items-center gap-1"><Link2Icon size={16} />Link</span>
						</Link>
						<div className='px-2 py-1 bg-gray-500/10 rounded-full'>
							<span className="text-xs flex items-center gap-1"><FolderCode size={16} />{category}</span>
						</div>
					</div>
				</div>
				
				<Link href={`works/personal/${slug}`} className="flex items-center text-xs uppercase tracking-widest mt-4 md:mt-6 text-gray-600 group/link">
					<span className="group-hover/link:text-gray-900">Explore Project Details</span>
					<svg className="w-3 h-3 ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
					</svg>
				</Link>
			</div>
		</article>
	)
}

export default PersWorkCard