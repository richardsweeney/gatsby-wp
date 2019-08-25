import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import PostListItem from "../components/PostListItem"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpgraphql {
        posts {
          edges {
            node {
              date
              id
              slug
              title
              excerpt
              featuredImage {
                sourceUrl
                srcSet
                sizes
                altText
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {data.wpgraphql.posts.edges.map(({ node }) => (
        <PostListItem node={node}/>
      ))}
    </Layout>
  )
}

export default IndexPage
