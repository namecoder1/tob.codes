import { defineType, defineField } from "sanity";

export const appPolicy = defineType({
  name: 'appPolicy',
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