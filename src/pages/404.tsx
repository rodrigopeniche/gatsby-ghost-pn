import * as React from "react"

// import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <p style={{
            pointerEvents: "none",
            fontFamily: 'Open Sans, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            fontSize: "17px",
            fontWeight: 500,
            userSelect: "none",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>Page not found 404</p>
    </>
)

export default NotFoundPage
