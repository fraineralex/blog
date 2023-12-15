import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	path: {
		type: "string",
		resolve: (doc: any) => `/${doc._raw.flattenedPath}`,
	},
	slug: {
		type: "string",
		resolve: (doc: any) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
	},
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: './posts/**/*.mdx',
  contentType: 'mdx',

  fields: {
    published: {
      type: 'boolean'
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
      type: 'date',
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
    tags: {
      type: 'list',
      of: {
        type: 'string'
      }
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
      type: 'date',
      required: true
    }
  }
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Page, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode as any,
        {
          theme: 'github-dark',
          onVisitLine (node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine (node: any) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord (node: any) {
            node.properties.className = ['word--highlighted']
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
})
