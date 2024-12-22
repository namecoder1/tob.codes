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
	*[_type == 'post'] | order(_createdAt desc) {
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

export const ARTICLE_QUERY = defineQuery(`
	*[_type == 'post' && slug.current == $slug][0] {
		title,
		'slug': slug.current,
		excerpt,
		'category': category -> {title, 'slug': slug.current},
		'body': body[],
		pubDate
	}	
`)
export const CATEGORIES_QUERY = defineQuery(`
	*[_type == 'category' && slug.current == $category] | order(_createdAt desc) {
		title
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
		category->{'slug': slug.current, 'title': title, 'description': description},
		'totalArticles': count(*[_type == 'post' && category->slug.current == 'sanity'])
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