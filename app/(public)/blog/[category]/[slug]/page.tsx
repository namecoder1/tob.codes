import { Button } from '@/components/ui/button'
import TextBlock from '@/components/ui/text-block'
import { formatDate } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { ARTICLE_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'

import tobi from '@/assets/tobi.png'

import { Undo } from 'lucide-react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Pin from '@/components/ui/pin'

const ArticlePage = async ({ params } : { params: Promise<{slug: string}>}) => {
	const slug = (await params).slug
	const article = await client.fetch(ARTICLE_QUERY, {slug})
	if(!article || article === null) {
		return (
			<div>Nessun&apos;informazione sull&apos;articolo</div>
		)
	}
	return (
		<article className='fade-in-alternate'>
			<Button asChild className='mb-10'><Link href='/blog'><Undo className='inline-block' />Torna indietro</Link></Button>
			<div>
				<h1 className='heading-lg'>{article.title}</h1>
				<div className='flex items-center justify-between mt-4'>
					<div className='flex items-center justify-center gap-2.5'>
						<Image src={tobi} alt='Foto di Tobia Bartolomei' width={30} height={30} className='border border-black/20 bg-white p-1 rounded-full w-10 aspect-square content-center shadow-md' />
						<p className='flex flex-col items-start justify-center -gap-1'>
							<span className='font-semibold text-sm'>{formatDate(article.pubDate)}</span>
							<span className='text-xs'>Tobia Bartolomei</span>
						</p>
					</div>
					<div>
						<Pin slug={`${article.category?.slug}`} title={`${article.category?.title}`} />
					</div>
				</div>
			</div>
			<Separator className='my-8 bg-black/20' />
			<div className='max-w-4xl fade-in-left-alternate prose prose-lg prose-slate'>
				<TextBlock value={article.body}/>
			</div>

		</article>
	)
}

export default ArticlePage