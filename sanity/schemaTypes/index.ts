import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { category } from './category'
import { blockContentType } from './blockContent'
import { work } from './work'
import { image } from './image'
import { skill } from './skills'
import { persWork } from './pers-work'
import { app } from './app'
import { appSupport } from './appSupport'
import { appPolicy } from './appPrivacy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, work, category, blockContentType, image, skill, persWork, app, appPolicy, appSupport],
}
