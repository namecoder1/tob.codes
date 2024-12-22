import { defineType, defineField } from "sanity";

export const post = defineType({
	name: 'post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string'
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			}
		}),
		defineField({
			name: 'excerpt',
			title: 'Descrizione',
			type: 'text'
		}),
		defineField({
			name: 'mainImage',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string'
				})
			]
		}),
		defineField({
			name: 'pubDate',
			type: 'date'
		}),
		defineField({
			name: 'category',
			type: 'reference',
			to: { type: 'category'}
		}),
		defineField({
			name: 'body',
			type: 'blockContent'
		})
	]
})