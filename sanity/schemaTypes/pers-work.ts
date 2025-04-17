import { defineField, defineType } from "sanity";

export const persWork = defineType({
	name: 'persWork',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			},
		}),
		defineField({
			name: 'pubDate',
			type: 'date',
		}),
		defineField({
			name: 'excerpt',
			type: 'text',
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				})
			]
		}),
		defineField({
			name: 'category',
			type: 'string',
			options: {
				list: [
					{ title: 'Backend', value: 'Backend' },
					{ title: 'Frontend', value: 'Frontend' },
					{ title: 'Full Stack', value: 'Full Stack' },
				]
			}
		}),
		defineField({
			name: 'link',
			type: 'url',				
		}),
		defineField({
			name: 'github',
			type: 'url',
		}),
		defineField({
			name: 'body',
			type: 'blockContent',
		})
	]
})