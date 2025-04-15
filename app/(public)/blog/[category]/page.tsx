import Article from '@/components/blocks/article'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { ARTICLES_CATEGORY_QUERY } from '@/sanity/lib/queries'
import { Undo } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

// Add revalidation to ensure content is fresh
export const revalidate = 60

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
	const category = await client.fetch(ARTICLES_CATEGORY_QUERY, { category: params.category })
	
	if (!category) {
		return {
			title: 'Categoria non trovata',
			description: 'La categoria richiesta non è stata trovata'
		}
	}

	const description = category[0]?.category?.description || 'Nessuna descrizione disponibile'
	const title = category[0]?.category?.title || 'Categoria non trovata'

	return {
		title: `${title} | tob.codes`,
		description,
		openGraph: {
			title: `${title} | tob.codes`,
			description,
			type: 'article',
			authors: ['Tobia Bartolomei'],
			images: category[0]?.category?.mainImage || undefined
		},
		twitter: {
			card: 'summary_large_image',
			title: `${title} | tob.codes`,
			description,
			images: category[0]?.category?.mainImage || undefined
		}
	}
}

const CategoryPage = async ({ params } : { params: Promise<{category: string}>}) => {
	const category = (await params).category
	const articles = await client.fetch(ARTICLES_CATEGORY_QUERY, { category })

	return (
		<section className='fade-in-alternate'>
			<Button asChild className='mb-10'><Link href='/blog'><Undo className='inline-block' />Torna indietro</Link></Button>
			<hgroup className='mb-8 flex flex-col items-start justify-center gap-y-2'>
				<h1 className='heading-lg fade-in-left-alternate'><span className='mr-0.5'>#</span>{articles[0]?.category?.title}</h1>
				<p className='text-sm text-gray-500'>{articles[0]?.category?.description}</p>
				<h2 className='mt-2'>Articoli totali nella categoria: <span className='fade-in-top-alternate bg-gray-200 border border-black/20 py-1 px-2 rounded-md ml-0.5'>{articles[0]?.totalArticles}</span></h2>
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