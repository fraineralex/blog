const { withContentlayer } = require('next-contentlayer')
//const withMDX = require('@next/mdx')()
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true, swcMinify: true
}

module.exports = withContentlayer(nextConfig)