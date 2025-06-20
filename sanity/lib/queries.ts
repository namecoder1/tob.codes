import { defineQuery } from "next-sanity";

export const LAST_ARTICLE_QUERY = defineQuery(`
	*[_type == 'post'] | order(_createdAt desc) [0] {
		'id': _id,
		title,
		'slug': slug.current,
		excerpt,
		'image': mainImage.asset -> url,
		'imageAlt': mainImage.alt,
		'category': category -> {title, 'slug': slug.current},
		pubDate
	}	
`)

export const ARTICLES_QUERY = defineQuery(`
	*[_type == 'post'] | order(_createdAt desc) [$start...$end] {
		'id': _id,
		title,
		'slug': slug.current,
		excerpt,
		'image': mainImage.asset -> url,
		'imageAlt': mainImage.alt,
		'category': category -> {title, 'slug': slug.current},
		pubDate
	}	
`)

export const ARTICLES_COUNT_QUERY = defineQuery(`
	count(*[_type == 'post'])
`)

export const ARTICLE_QUERY = defineQuery(`
	*[_type == 'post' && slug.current == $slug][0] {
		title,
		'slug': slug.current,
		excerpt,
		'publishedTime': pubDate,
		'category': category -> {title, 'slug': slug.current},
		'mainImage': mainImage.asset -> url,
		'body': body[],
		pubDate
	}	
`)
export const CATEGORIES_QUERY = defineQuery(`
	*[_type == 'category'] | order(_createdAt desc) {
		'id': _id,
		title,
		'slug': slug.current
	}	
`)
export const ARTICLES_CATEGORY_QUERY = defineQuery(`
	*[_type == 'post' && category->slug.current == $category] {
		'id': _id,
		title,
		'slug': slug.current,
		excerpt,
		'image': mainImage.asset -> url,
		'imageAlt': mainImage.alt,
		category->{'slug': slug.current, 'title': title, 'description': description, 'mainImage': mainImage.asset->url},
		'totalArticles': count(*[_type == 'post' && category->slug.current == $category])
	}
`)

export const LAST_WORK_QUERY = defineQuery(`
	*[_type == 'work'] | order(_createdAt desc) [0] {
		'id': _id,
		title,
		'slug': slug.current,
		category,
		pubDate,
		'image': mainImage.asset -> url,
		'imageAlt': mainImage.alt,
		excerpt,
		body
	}	
`)

export const WORKS_QUERY = defineQuery(`
	*[_type == 'work' ] | order(_createdAt desc) {
		'id': _id,
		title,
		'slug': slug.current,
		category,
		pubDate,
		'image': mainImage.asset -> url,
		'imageAlt': mainImage.alt,
		excerpt,
		body
	}	
`)

export const WORK_QUERY = defineQuery(`
	*[_type == 'work' && slug.current == $slug ] [0] {
		'id': _id,
		title,
		'slug': slug.current,
		category,
		pubDate,
		'image': mainImage.asset -> url,
		'imageAlt': mainImage.alt,
		'projId': wakaLinks.projectId,
  	'projImg': wakaLinks.projectImage,
		excerpt,
		body,
		link
	}	
`)

export const PERS_WORKS_QUERY = defineQuery(`
	*[_type == 'persWork'] | order(_createdAt desc) {
		'id': _id,
		title,
		'slug': slug.current,
		pubDate,
		'image': image.asset -> url,
		'imageAlt': image.alt,
		excerpt,
		body,
		github,
		link,
		category,
	}
`)

export const PERS_WORK_QUERY = defineQuery(`
	*[_type == 'persWork' && slug.current == $slug] [0] {
		'id': _id,
		title,
		'slug': slug.current,
		pubDate,
		'image': image.asset -> url,
		'imageAlt': image.alt,
		excerpt,
		body,
		github,
		link,
		category
	}
`)

export const PHOTOS_QUERY = defineQuery(`
	*[_type == 'persImage'] | order(_createdAt desc) {
		'id': _id,
		title,
		description,
		'image': mainImage.asset -> url,
		'imageAlt': mainImage.alt,
	}	
`)

export const SKILLS_QUERY = defineQuery(`
	*[_type == 'skill'] {
		'id': _id,
		title,
		'image': image.asset -> url,
		progress
	}	
`)

export const ABOUT_WORKS_QUERY = defineQuery(`
	*[_type == 'work'] {
		'id': _id,
		title,
		pubDate,
		category,
		link
	}	
`)

export const LAST_APP_QUERY = defineQuery(`
	*[_type == 'app'] | order(_createdAt desc) [0] {
		'id': _id,
		title,
		'slug': slug.current,
		link,
		platform,
		description,
		'image': mainImage.asset -> url
	}
`)

export const APPS_QUERY = defineQuery(`
	*[_type == 'app'] | order(_createdAt desc) {
		'id': _id,
		title,
		'slug': slug.current,
		link,
		platform,
		description,
		'image': mainImage.asset -> url,
		tag
	}
`)

export const APP_QUERY = defineQuery(`
	*[_type == 'app' && slug.current == $slug] [0] {
		'id': _id,
		title,
		'slug': slug.current,
		link,
		platform,
		description,
		'image': mainImage.asset -> url,
		tag,
		text
	}
`)

export const APP_PRIVACY_QUERY = defineQuery(`
	*[_type == 'appPolicy' && app._ref == $id] [0] {
		'id': _id,
		title,
		app,
		body
	}
`)


export const APP_SUPPORT_QUERY = defineQuery(`
	*[_type == 'appSupport' && app._ref == $id] [0] {
		'id': _id,
		title,
		app,
		body
	}
`)