import { defineType, defineField } from "sanity";

export const app = defineType({
  name: 'app',
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
			name: 'link',
			type: 'url'
		}),
    defineField({
			name: 'platform',
			type: 'string',
      options: {
        list: [
          {title: 'ios', value: 'iOS'},
          {title: 'android', value: 'Android'}
        ]
      }
		}),
		defineField({
			name: 'tag',
			type: 'array',
      of: [{type: 'string'}],
			options: {
				layout: 'tags'
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
		}),
		defineField({
			name: 'text',
			type: 'blockContent'
		}),
  ]
})