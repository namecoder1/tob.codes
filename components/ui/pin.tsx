import Link from 'next/link'
import React from 'react'

const Pin = ({ 
	slug,
	title,
	className
 } : { slug?: string, title: string | null, className?: string}) => {
	if(!slug) {
		return (
			<div className={`${className} border border-black/30 px-2 py-1 rounded-xl w-fit text-white bg-black/70 backdrop-blur-sm`}>
				<p className='text-sm'>{title}</p>
			</div>
		)
	}
	return (
		<Link href={`/blog/${slug}`}>
			<div className={`${className} border border-black/20 px-2 py-1 rounded-xl w-fit bg-white/20 backdrop-blur-sm`}>
				<p className='text-sm'>{title}</p>
			</div>
		</Link>
	)
}

export default Pin