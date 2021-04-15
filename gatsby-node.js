const Promise = require('bluebird')
const path = require('path')



//TEST

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
            {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          
          
            allContentfulPortfolioItem {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `)

  const portfolioItem = require.resolve(`./src/templates/portfolio-item.js`)
  const blogPost = require.resolve('./src/templates/blog-post.js')

  if (result.errors) {
    return
  }

        const items = result.data.allContentfulPortfolioItem.edges
        items.forEach(item => {
          createPage({
            path: `/portfolio/${item.node.slug}/`,
            component: portfolioItem,
            context: {
              slug: item.node.slug,
            },
          })
        })

          const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
}