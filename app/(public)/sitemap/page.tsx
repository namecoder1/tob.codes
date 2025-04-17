import Link from 'next/link'
import React from 'react'
import { client } from '@/sanity/lib/client'
import { ARTICLES_QUERY, WORKS_QUERY, PHOTOS_QUERY, CATEGORIES_QUERY, ARTICLES_COUNT_QUERY, PERS_WORKS_QUERY } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { Map } from 'lucide-react'

export const metadata: Metadata = {
	title: 'Sitemap | tob.codes',
	description: 'Mappa del sito di Tobia Bartolomei',
}

// Add revalidation to ensure content is fresh
export const revalidate = 60

const SitemapPage = async () => {
	// Fetch all dynamic content from Sanity
	const [articles, works, photos, categories, totalArticles, persWorks] = await Promise.all([
		client.fetch(ARTICLES_QUERY, { start: 0, end: 100 }), // Fetch up to 100 articles
		client.fetch(WORKS_QUERY),
		client.fetch(PHOTOS_QUERY),
		client.fetch(CATEGORIES_QUERY),
		client.fetch(ARTICLES_COUNT_QUERY),
		client.fetch(PERS_WORKS_QUERY)
	])

	// Static pages
	const staticPages = [
		{ title: 'Home', path: '/' },
		{ title: 'About', path: '/about' },
		{ title: 'Blog', path: '/blog' },
		{ title: 'Works', path: '/works' },
		{ title: 'Gallery', path: '/gallery' },
		{ title: 'Sitemap', path: '/sitemap' },
	]

	return (
		<section className='fade-in-alternate max-w-4xl mx-auto'>
			<h1 className='fade-in-alternate heading-lg flex items-center justify-start gap-2.5'>
				<div className="inline-block">
          <div className="bg-gray-200 border-2 border-black/20 rounded-2xl flex p-[8px] w-fit">
            <Map className="inline-block" size={28} />
          </div>
        </div>
				Sitemap
			</h1>
			<Separator className='my-6 bg-black/20' />
			
			{/* Static Pages */}
			<div className='mb-10'>
				<h2 className='heading-md mb-4'>Pagine Statiche</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
					{staticPages.map((page) => (
						<SitemapLink key={page.path} title={page.title} path={page.path} />
					))}
				</ul>
			</div>

			{/* Blog Categories */}
			<div className='mb-10'>
				<h2 className='heading-md mb-4'>Categorie Blog</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
					{categories.map((category) => (
						<SitemapLink key={category.id} title={category.title || 'Categoria senza titolo'} path={`/blog/${category.slug}`} />
					))}
				</ul>
			</div>

			{/* Blog Articles */}
			<div className='mb-10'>
				<h2 className='heading-md mb-4'>Articoli Blog ({totalArticles} totali)</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
					{articles.map((article) => (
						<SitemapLink key={article.id} title={article.title || 'Articolo senza titolo'} path={`/blog/${article.category?.slug}/${article.slug}`} />
					))}
				</ul>
			</div>

			{/* Works */}
			<div className='mb-10'>
				<h2 className='heading-md mb-4'>Progetti</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
					{works.map((work) => (
						<SitemapLink key={work.id} title={work.title || 'Progetto senza titolo'} path={`/works/${work.slug}`} />
					))}
				</ul>
			</div>

			{/* Gallery Photos */}
			<div className='mb-10'>
				<h2 className='heading-md mb-4'>Galleria</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
					{photos.map((photo) => (
						<SitemapLink key={photo.id} title={photo.title || 'Foto senza titolo'} path={`/gallery#${photo.id}`} />
					))}
				</ul>
			</div>

			{/* Personal Works */}
			<div className='mb-10'>
				<h2 className='heading-md mb-4'>Progetti Personali</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
					{persWorks.map((persWork) => (
						<SitemapLink key={persWork.id} title={persWork.title || 'Progetto senza titolo'} path={`/works/personal/${persWork.slug}`} />
					))}
				</ul>
			</div>
		</section>
	)
}

const SitemapLink = ({ title, path }: { title: string, path: string }) => {
	return (
		<li key={path}>
			<Link href={path} className='text-gray-800 hover:underline underline-offset-2'>
				{title}
			</Link>
		</li>
	)
}

export default SitemapPage