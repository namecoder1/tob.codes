import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('tob.codes')
    .items([
      S.documentTypeListItem('work').title('Progetti'),
      S.documentTypeListItem('app').title('Apps'),
      S.documentTypeListItem('appPolicy').title('Policy Apps'),
      S.documentTypeListItem('appSupport').title('Supporto Apps'),
      S.documentTypeListItem('persWork').title('Progetti Personali'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('post').title('Blog'),
      S.documentTypeListItem('persImage').title('Gallery'),
      S.documentTypeListItem('category').title('Categorie Articoli'),
    ])
