import { client } from '@/sanity/lib/client'
import { ARTICLES_QUERY, LAST_ARTICLE_QUERY } from '@/sanity/lib/queries'
import Article from '@/components/blocks/article'
import React from 'react'
import LastArticle from '@/components/blocks/last-article'

import { LibraryBig } from 'lucide-react'
import { Separator } from '@/components/ui/separator'



const BlogPage = async () => {
	const articles = await client.fetch(ARTICLES_QUERY)
	const lastArticle = await client.fetch(LAST_ARTICLE_QUERY)
	return (
		<div className='fade-in-alternate'>
			<h1 className='heading-lg mb-10 flex items-center justify-start gap-1'><LibraryBig className='inline-block' size={42} />Blog</h1>
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