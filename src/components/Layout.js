import React from "react"
import "./style.css"

const Layout = ({ children }) => (
  <div className="container mx-auto max-w-5xl p-6 shadow-lg rounded bg-white my-6">
		{children}
	</div>
)

export default Layout
