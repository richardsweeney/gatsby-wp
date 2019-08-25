import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import FeaturedImage from "./FeaturedImage"

const propTypes = {
  node: PropTypes.object.isRequired,
}

const PostListItem = ({ node }) => (
  <>
    <Link to={node.slug}>
      <h2 className="text-3xl">{node.title}</h2>
    </Link>
    <FeaturedImage image={node.featuredImage}/>
    <div dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
    <span>Published: {node.date}</span>
    <Link to={node.slug}>Read more...</Link>
  </>
)

PostListItem.propTypes = propTypes;

export default PostListItem
