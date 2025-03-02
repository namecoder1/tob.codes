import { client } from '@/sanity/lib/client'
import { ARTICLES_QUERY, LAST_ARTICLE_QUERY, CATEGORIES_QUERY } from '@/sanity/lib/queries'
import Article from '@/components/blocks/article'
import React from 'react'
import LastArticle from '@/components/blocks/last-article'

import { LibraryBig } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import Pin from '@/components/ui/pin'



const BlogPage = async () => {
	const articles = await client.fetch(ARTICLES_QUERY)
	const lastArticle = await client.fetch(LAST_ARTICLE_QUERY)
	const categories = await client.fetch(CATEGORIES_QUERY)

	console.log(categories)

	return (
		<div className='fade-in-alternate'>
			<div className='flex flex-col gap-3 mb-4'>
				<h1 className='heading-lg mb-2 flex items-center justify-start gap-2'>
					<div className="inline-block">
            <div className="bg-[#77b4ff] border-2 border-blue-950/20 rounded-2xl flex p-[8px] w-fit">
              <LibraryBig className="inline-block" size={28} />
            </div>
          </div>
					Blog
				</h1>
				<Separator className='bg-black/20' />
			</div>

			<div className='flex flex-col gap-3 mb-16'>
				<h2 className='heading-sm flex items-center justify-start gap-1'>Categorie</h2>
				<div className='flex flex-wrap gap-2'>
					{categories.map((category) => (
						<Pin key={category.id} title={category.title} slug={`${category.slug}`} />
					))}
				</div>
			</div>

			<LastArticle article={lastArticle} />
			<Separator className='my-10 md:my-16 bg-black/20' />
			<h2 className='heading-md mb-4 fade-in-alternate'>Tutti gli articoli</h2>
			<div className='flex flex-col gap-5 gap-y-8 w-full md:grid md:grid-cols-2'>
				{articles.map((article) => {
					return (
						<Article article={article} key={article.id}/>
					)
				})}
			</div>

		</div>
	)
}

export default BlogPage