import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: './posts/**/*.mdx',
  contentType: 'mdx',

  fields: {
    published: {
      type: 'string'
    },
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    pubDate: {
      type: 'date'
    },
    slug: {
      type: 'string',
      required: true
    },
    hero: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'list',
      of: {
        type: 'string'
      }
    }
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (doc: any) => `/${doc._raw.flattenedPath}`
    },
    slug: {
      type: 'string',
      resolve: (doc: any) =>
        doc._raw.flattenedPath.split('/').slice(1).join('/')
    }
  }
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: './pages/**/*.mdx',
  contentType: 'mdx',

  fields: {
    title: {
      type: 'string',
      required: true
    },
    slug: {
      type: 'string',
      required: true
    },
    hero: {
      type: 'string',
      required: true
    },
    pubDate: {
      type: 'date'
    }
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (doc: any) => `/${doc._raw.flattenedPath}`
    },
    slug: {
      type: 'string',
      resolve: (doc: any) =>
        doc._raw.flattenedPath.split('/').slice(1).join('/')
    }
  }
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Page, Post]
})
