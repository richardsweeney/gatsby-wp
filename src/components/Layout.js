import React from "react"
import "./style.css"

const Layout = ({ children }) => (
  <div style={{
    margin: "20px auto",
    width: "100%",
    maxWith: "900px",
  }}>{children}</div>
)

export default Layout
