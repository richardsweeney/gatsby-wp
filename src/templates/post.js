import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";

const Post = ({ data }) => (
	<Layout>
		<article>
			<header>
				<h1
					className="leading-tight text-black-900 mb-4"
					dangerouslySetInnerHTML={{ __html: decodeURI(data.wpgraphql.post.title)}}
				/>
			</header>

			<div dangerouslySetInnerHTML={{ __html: decodeURI(data.wpgraphql.post.content)}} />
		</article>
	</Layout>
)

export default Post

export const pageQuery = graphql`
  query GetPost($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
        author {
          name
          slug
          avatar {
            url
          }
        }
        tags {
          nodes {
            name
            link
          }
        }
        categories {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`
