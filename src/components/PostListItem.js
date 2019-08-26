import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import FeaturedImage from "./FeaturedImage"

const PostListItem = ({ node }) => (
  <div className="my-1 px-1 w-full lg:w-1/2 lg:my-4 lg:px-3">
		<article class="overflow-hidden rounded shadow">
			<Link to={`/${node.slug}`} className="no-underline">
				<FeaturedImage image={node.featuredImage}/>
			</Link>

			<div className="p-4">
				<h2
					className="leading-tight text-black-900"
					dangerouslySetInnerHTML={{ __html: decodeURI(node.title)}}
				/>
				<p
					className="my-3"
					dangerouslySetInnerHTML={{ __html: node.excerpt }}
				/>
				<p className="my-3 text-gray-600">Published: {node.date}</p>
				<p>
					<Link to={node.slug}>
						Read:&nbsp;
						<span
							className="font-bold"
							dangerouslySetInnerHTML={{ __html: decodeURI(node.title)}}
						/>
					</Link>
				</p>
			</div>
		</article>
  </div>
)

PostListItem.propTypes = {
  node: PropTypes.object.isRequired,
};

export default PostListItem
