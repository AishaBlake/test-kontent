const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const articleTemplate = path.resolve('./src/templates/article-template.jsx')
    const pageTemplate = path.resolve('./src/templates/page-template.jsx')
    const tagTemplate = path.resolve('./src/templates/tag-template.jsx')
    const categoryTemplate = path.resolve('./src/templates/category-template.jsx')

    graphql(`
    {
      allKontentItemCategory(filter: {preferred_language: {eq: "en-US"}}) {
        nodes {
          system {
            codename
          }
          elements {
            slug {
              value
            }
            title {
              value
            }
          }
        }
      }
      allKontentItemTag(filter: {preferred_language: {eq: "en-US"}}) {
        nodes {
          system {
            codename
          }
          elements {
            title {
              value
            }
            slug {
              value
            }
          }
        }
      }
      allKontentItemPage(filter: {preferred_language: {eq: "en-US"}}) {
        nodes {
          elements {
            slug {
              value
            }
          }
        }
      }
      allKontentItemArticle(filter: {preferred_language: {eq: "en-US"}}) {
        nodes {
          elements {
            slug {
              value
            }
          }
        }
      }
    }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      _.each(result.data.allKontentItemPage.nodes, node => {
        createPage({
          path: `/${node.elements.slug.value}/`,
          component: slash(pageTemplate),
          context: { slug: `${node.elements.slug.value}` },
        })
      })

      _.each(result.data.allKontentItemArticle.nodes, node => {
        createPage({
          path: `/articles/${node.elements.slug.value}/`,
          component: slash(articleTemplate),
          context: { slug: `${node.elements.slug.value}` },
        })
      })

      const tags = result.data.allKontentItemTag.nodes
      _.each(tags, tag => {
        const tagCodename = tag.system.codename
        const tagTitle = tag.elements.title.value
        createPage({
          path: `/tags/${tag.elements.slug.value}/`,
          component: tagTemplate,
          context: { tagCodename, tagTitle },
        })
      })

      const categories = result.data.allKontentItemCategory.nodes
      _.each(categories, category => {
        const categoryCodename = category.system.codename
        const categoryTitle = category.elements.title.value
        createPage({
          path: `/categories/${category.elements.slug.value}/`,
          component: categoryTemplate,
          context: { categoryCodename, categoryTitle },
        })
      })

      resolve()
    })
  })
}
