import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  image: PropTypes.object.isRequired
}

const FeaturedImage = ({ image }) => (
  <img src={image.sourceUrl} srcSet={image.srcSet} alt={image.altText} />
)

FeaturedImage.propTypes = propTypes

export default FeaturedImage

