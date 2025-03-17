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
		<article className="fade-in-alternate">
			<div className="relative">
				<Image priority src={image} alt={imageAlt} width={500} height={400} className='w-full md:w-[398px] shadow-md rounded-xl border border-gray-300' />			
				<Link href={`/blog/${category.slug}`}>
					<Pin className="absolute top-3 right-3" title={category.title}/>
				</Link>
			</div>
			<h2 className="heading-sm mt-2">{title}</h2>
			<p className="line-clamp-3 mt-2">{excerpt}</p>
			<Button asChild className="w-full mt-3">
				<Link href={`/blog/${category.slug}/${slug}`}>
					Leggi ora <BookOpenText className="inline-block" />
				</Link>
			</Button>
		</article>
	)
}

export default Article
