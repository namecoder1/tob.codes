import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import Pin from "../ui/pin"

import { BookOpenText } from "lucide-react"

const Article = ({ article } : any ) => {
	const { 
		title,
		slug,
		excerpt,
		image,
		imageAlt,
		category
	 } = article
	return (
		<article className="fade-in-alternate h-[420px] flex flex-col">
			<div className="relative w-full aspect-[16/9]">
				<Image 
					priority 
					src={image} 
					alt={imageAlt} 
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					className='object-cover shadow-md rounded-xl border border-gray-300' 
				/>			
				<Link href={`/blog/${category.slug}`}>
					<Pin className="absolute top-3 right-3" title={category.title}/>
				</Link>
			</div>
			<div className="flex flex-col flex-grow">
				<h2 className="heading-sm mt-2 line-clamp-2">{title}</h2>
				<p className="line-clamp-3 mt-2 flex-grow">{excerpt}</p>
				<Button asChild className="w-full mt-3">
					<Link href={`/blog/${category.slug}/${slug}`}>
						Leggi ora <BookOpenText className="inline-block" />
					</Link>
				</Button>
			</div>
		</article>
	)
}

export default Article
