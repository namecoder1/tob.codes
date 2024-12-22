import { defineType, defineField } from "sanity";

export const work = defineType({
	name: 'work',
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
			name: 'wakaLinks',
			type: 'document',
			fields: [
				defineField({
					name: 'projectId',
					type: 'string'
				}),
				defineField({
					name: 'projectImage',
					type: 'string'
				})
			]
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
			name: 'excerpt',
			type: 'text'
		}),
		defineField({
			name: 'category',
			type: 'string',
			options: {
				list: [
					{title: '1', value: 'FrontEnd'},
					{title: '2', value: 'BackEnd'},
					{title: '3', value: 'FullStack'},
				]
			}
		}),
		defineField({
			name: 'pubDate',
			type: 'date'
		}),
		defineField({
			name: 'body',
			type: 'blockContent'
		})
	]
})