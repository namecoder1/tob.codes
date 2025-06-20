import Link from 'next/link'
import React from 'react'

const Pin = ({ 
	slug,
	title,
	className
 } : { slug?: string, title: React.ReactNode | string | null, className?: string}) => {
	if(!slug) {
		return (
			<div className={`${className} border border-black/30 px-2 py-1 rounded-xl w-fit text-white bg-black backdrop-blur-sm`}>
				<p className='text-sm'>{title}</p>
			</div>
		)
	}
	return (
		<Link href={`/blog/${slug}`}>
			<div className={`${className} border border-black/20 px-2 py-1 rounded-xl w-fit text-white bg-black backdrop-blur-sm`}>
				<p className='text-sm'>{title}</p>
			</div>
		</Link>
	)
}

export default Pin