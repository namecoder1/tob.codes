import { defineField, defineType } from "sanity";

export const category = defineType({
	name: 'category',
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
			name: 'description',
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
		})
	]
})