import { defineType, defineField } from "sanity";

export const appSupport = defineType({
  name: 'appSupport',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'App Privacy'
    }),
    defineField({
      name: 'app',
      type: 'reference',
      to: {type: 'app'}
    }),
    defineField({
      name: 'body',
      type: 'blockContent'
    })
  ]
})