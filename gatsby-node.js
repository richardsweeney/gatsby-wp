/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//const createPages = require(`./gatsby/createPages`)
const createPosts = require(`./gatsby/createPosts`)
//const createUsers = require(`./gatsby/createUsers`)
//const createCategories = require(`./gatsby/createCategories`)
//const createTags = require(`./gatsby/createTags`)

exports.createPages = async ({ actions, graphql }) => {
//  await createPages({ actions, graphql })
  await createPosts({ actions, graphql })
//  await createUsers({ actions, graphql })
//  await createCategories({ actions, graphql })
//  await createTags({ actions, graphql })
}
