/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Skill = {
  _id: string;
  _type: "skill";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  progress?: number;
};

export type PersImage = {
  _id: string;
  _type: "persImage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type Work = {
  _id: string;
  _type: "work";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  link?: string;
  wakaLinks?: {
    projectId?: string;
    projectImage?: string;
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  excerpt?: string;
  category?: "Front-end" | "Back-end" | "Full-stack";
  pubDate?: string;
  body?: BlockContent;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  excerpt?: string;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  pubDate?: string;
  category?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "category";
  };
  body?: BlockContent;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Skill | PersImage | BlockContent | Work | Post | Category | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.ts
// Variable: LAST_ARTICLE_QUERY
// Query: *[_type == 'post'] | order(_createdAt desc) [0] {		'id': _id,		title,		'slug': slug.current,		excerpt,		'image': mainImage.asset -> url,		'imageAlt': mainImage.alt,		'category': category -> {title, 'slug': slug.current},		pubDate	}
export type LAST_ARTICLE_QUERYResult = {
  id: string;
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  image: string | null;
  imageAlt: string | null;
  category: {
    title: string | null;
    slug: string | null;
  } | null;
  pubDate: string | null;
} | null;
// Variable: ARTICLES_QUERY
// Query: *[_type == 'post'] | order(_createdAt desc) {		'id': _id,		title,		'slug': slug.current,		excerpt,		'image': mainImage.asset -> url,		'imageAlt': mainImage.alt,		'category': category -> {title, 'slug': slug.current},		pubDate	}
export type ARTICLES_QUERYResult = Array<{
  id: string;
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  image: string | null;
  imageAlt: string | null;
  category: {
    title: string | null;
    slug: string | null;
  } | null;
  pubDate: string | null;
}>;
// Variable: ARTICLE_QUERY
// Query: *[_type == 'post' && slug.current == $slug][0] {		title,		'slug': slug.current,		excerpt,		'category': category -> {title, 'slug': slug.current},		'body': body[],		pubDate	}
export type ARTICLE_QUERYResult = {
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  category: {
    title: string | null;
    slug: string | null;
  } | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  pubDate: string | null;
} | null;
// Variable: CATEGORIES_QUERY
// Query: *[_type == 'category'] | order(_createdAt desc) {		'id': _id,		title,		'slug': slug.current	}
export type CATEGORIES_QUERYResult = Array<{
  id: string;
  title: string | null;
  slug: string | null;
}>;
// Variable: ARTICLES_CATEGORY_QUERY
// Query: *[_type == 'post' && category->slug.current == $category] {		'id': _id,		title,		'slug': slug.current,		excerpt,		'image': mainImage.asset -> url,		'imageAlt': mainImage.alt,		category->{'slug': slug.current, 'title': title, 'description': description},		'totalArticles': count(*[_type == 'post' && category->slug.current == 'sanity'])	}
export type ARTICLES_CATEGORY_QUERYResult = Array<{
  id: string;
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  image: string | null;
  imageAlt: string | null;
  category: {
    slug: string | null;
    title: string | null;
    description: string | null;
  } | null;
  totalArticles: number;
}>;
// Variable: LAST_WORK_QUERY
// Query: *[_type == 'work'] | order(_createdAt desc) [0] {		'id': _id,		title,		'slug': slug.current,		category,		pubDate,		'image': mainImage.asset -> url,		'imageAlt': mainImage.alt,		excerpt,		body	}
export type LAST_WORK_QUERYResult = {
  id: string;
  title: string | null;
  slug: string | null;
  category: "Back-end" | "Front-end" | "Full-stack" | null;
  pubDate: string | null;
  image: string | null;
  imageAlt: string | null;
  excerpt: string | null;
  body: BlockContent | null;
} | null;
// Variable: WORKS_QUERY
// Query: *[_type == 'work' ] | order(_createdAt desc) {		'id': _id,		title,		'slug': slug.current,		category,		pubDate,		'image': mainImage.asset -> url,		'imageAlt': mainImage.alt,		excerpt,		body	}
export type WORKS_QUERYResult = Array<{
  id: string;
  title: string | null;
  slug: string | null;
  category: "Back-end" | "Front-end" | "Full-stack" | null;
  pubDate: string | null;
  image: string | null;
  imageAlt: string | null;
  excerpt: string | null;
  body: BlockContent | null;
}>;
// Variable: WORK_QUERY
// Query: *[_type == 'work' && slug.current == $slug ] [0] {		'id': _id,		title,		'slug': slug.current,		category,		pubDate,		'image': mainImage.asset -> url,		'imageAlt': mainImage.alt,		'projId': wakaLinks.projectId,  	'projImg': wakaLinks.projectImage,		excerpt,		body,		link	}
export type WORK_QUERYResult = {
  id: string;
  title: string | null;
  slug: string | null;
  category: "Back-end" | "Front-end" | "Full-stack" | null;
  pubDate: string | null;
  image: string | null;
  imageAlt: string | null;
  projId: string | null;
  projImg: string | null;
  excerpt: string | null;
  body: BlockContent | null;
  link: string | null;
} | null;
// Variable: PHOTOS_QUERY
// Query: *[_type == 'persImage'] | order(_createdAt desc) {		'id': _id,		title,		description,		'image': mainImage.asset -> url,		'imageAlt': mainImage.alt,	}
export type PHOTOS_QUERYResult = Array<{
  id: string;
  title: string | null;
  description: string | null;
  image: string | null;
  imageAlt: string | null;
}>;
// Variable: SKILLS_QUERY
// Query: *[_type == 'skill'] {		'id': _id,		title,		'image': image.asset -> url,		progress	}
export type SKILLS_QUERYResult = Array<{
  id: string;
  title: string | null;
  image: string | null;
  progress: number | null;
}>;
// Variable: ABOUT_WORKS_QUERY
// Query: *[_type == 'work'] {		'id': _id,		title,		pubDate,		category,		link	}
export type ABOUT_WORKS_QUERYResult = Array<{
  id: string;
  title: string | null;
  pubDate: string | null;
  category: "Back-end" | "Front-end" | "Full-stack" | null;
  link: string | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n\t*[_type == 'post'] | order(_createdAt desc) [0] {\n\t\t'id': _id,\n\t\ttitle,\n\t\t'slug': slug.current,\n\t\texcerpt,\n\t\t'image': mainImage.asset -> url,\n\t\t'imageAlt': mainImage.alt,\n\t\t'category': category -> {title, 'slug': slug.current},\n\t\tpubDate\n\t}\t\n": LAST_ARTICLE_QUERYResult;
    "\n\t*[_type == 'post'] | order(_createdAt desc) {\n\t\t'id': _id,\n\t\ttitle,\n\t\t'slug': slug.current,\n\t\texcerpt,\n\t\t'image': mainImage.asset -> url,\n\t\t'imageAlt': mainImage.alt,\n\t\t'category': category -> {title, 'slug': slug.current},\n\t\tpubDate\n\t}\t\n": ARTICLES_QUERYResult;
    "\n\t*[_type == 'post' && slug.current == $slug][0] {\n\t\ttitle,\n\t\t'slug': slug.current,\n\t\texcerpt,\n\t\t'category': category -> {title, 'slug': slug.current},\n\t\t'body': body[],\n\t\tpubDate\n\t}\t\n": ARTICLE_QUERYResult;
    "\n\t*[_type == 'category'] | order(_createdAt desc) {\n\t\t'id': _id,\n\t\ttitle,\n\t\t'slug': slug.current\n\t}\t\n": CATEGORIES_QUERYResult;
    "\n\t*[_type == 'post' && category->slug.current == $category] {\n\t\t'id': _id,\n\t\ttitle,\n\t\t'slug': slug.current,\n\t\texcerpt,\n\t\t'image': mainImage.asset -> url,\n\t\t'imageAlt': mainImage.alt,\n\t\tcategory->{'slug': slug.current, 'title': title, 'description': description},\n\t\t'totalArticles': count(*[_type == 'post' && category->slug.current == 'sanity'])\n\t}\n": ARTICLES_CATEGORY_QUERYResult;
    "\n\t*[_type == 'work'] | order(_createdAt desc) [0] {\n\t\t'id': _id,\n\t\ttitle,\n\t\t'slug': slug.current,\n\t\tcategory,\n\t\tpubDate,\n\t\t'image': mainImage.asset -> url,\n\t\t'imageAlt': mainImage.alt,\n\t\texcerpt,\n\t\tbody\n\t}\t\n": LAST_WORK_QUERYResult;
    "\n\t*[_type == 'work' ] | order(_createdAt desc) {\n\t\t'id': _id,\n\t\ttitle,\n\t\t'slug': slug.current,\n\t\tcategory,\n\t\tpubDate,\n\t\t'image': mainImage.asset -> url,\n\t\t'imageAlt': mainImage.alt,\n\t\texcerpt,\n\t\tbody\n\t}\t\n": WORKS_QUERYResult;
    "\n\t*[_type == 'work' && slug.current == $slug ] [0] {\n\t\t'id': _id,\n\t\ttitle,\n\t\t'slug': slug.current,\n\t\tcategory,\n\t\tpubDate,\n\t\t'image': mainImage.asset -> url,\n\t\t'imageAlt': mainImage.alt,\n\t\t'projId': wakaLinks.projectId,\n  \t'projImg': wakaLinks.projectImage,\n\t\texcerpt,\n\t\tbody,\n\t\tlink\n\t}\t\n": WORK_QUERYResult;
    "\n\t*[_type == 'persImage'] | order(_createdAt desc) {\n\t\t'id': _id,\n\t\ttitle,\n\t\tdescription,\n\t\t'image': mainImage.asset -> url,\n\t\t'imageAlt': mainImage.alt,\n\t}\t\n": PHOTOS_QUERYResult;
    "\n\t*[_type == 'skill'] {\n\t\t'id': _id,\n\t\ttitle,\n\t\t'image': image.asset -> url,\n\t\tprogress\n\t}\t\n": SKILLS_QUERYResult;
    "\n\t*[_type == 'work'] {\n\t\t'id': _id,\n\t\ttitle,\n\t\tpubDate,\n\t\tcategory,\n\t\tlink\n\t}\t\n": ABOUT_WORKS_QUERYResult;
  }
}
