import { defineType, defineField } from "sanity";

export const image = defineType({
	name: 'persImage',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string'
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
		}),
	]
})