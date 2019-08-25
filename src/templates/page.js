import React from "react"
import { graphql } from "gatsby"

const Page = props => {
  return <div>Page yo</div>
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
