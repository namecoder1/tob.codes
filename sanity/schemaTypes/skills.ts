import { defineField, defineType } from "sanity";

export const skill = defineType({
	name: 'skill',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string'
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true
			}
		})
	]
})