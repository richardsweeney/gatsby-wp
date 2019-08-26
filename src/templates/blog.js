import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import PostListItem from "../components/PostListItem"

const query = graphql`
	query GetPosts {
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
`

const IndexPage = () => {
  const { wpgraphql } = useStaticQuery(query)

  return (
    <Layout>
			<h1>Blog</h1>

			<div className="flex mt-3 flex-wrap -mx-3">
				{wpgraphql.posts.edges.map(({ node }) => (
					<PostListItem node={node}/>
				))}
			</div>
    </Layout>
  )
}

export default IndexPage
