import Article from '@/components/blocks/article'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { ARTICLES_CATEGORY_QUERY } from '@/sanity/lib/queries'
import { Undo } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CategoryPage = async ({ params } : { params: Promise<{category: string}>}) => {
	const category = (await params).category
	const articles = await client.fetch(ARTICLES_CATEGORY_QUERY, { category })
	return (
		<section className='fade-in-alternate'>
			<Button asChild className='mb-5'><Link href='/blog'><Undo className='inline-block' />Torna indietro</Link></Button>
			<hgroup className='mb-8 flex flex-col items-start justify-center gap-y-2'>
				<h1 className='heading-lg fade-in-left-alternate'><span className='mr-0.5'>#</span>{articles[0]?.category?.title}</h1>
				<h2>Articoli totali nella categoria: <span className='fade-in-top-alternate bg-gray-200 border border-black/20 py-1 px-2 rounded-md ml-0.5'>{articles[0]?.totalArticles}</span></h2>
			</hgroup>
			<div className='min-h-[65vh] flex flex-col gap-5 w-full md:grid md:grid-cols-2'>
				{articles.map((article) => (
						<Article article={article} key={article.id}/>
				))}
			</div>
		</section>
	)
}

export default CategoryPage