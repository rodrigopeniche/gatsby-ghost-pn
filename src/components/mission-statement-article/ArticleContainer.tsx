import * as React from "react"

const ArticleContainer = ({
    children,
}: {
    children: React.ReactNode[] | React.ReactNode
}) => {
    const containerStyles: React.CSSProperties = {
        marginLeft: "11px",
        marginRight: "11px",
        boxSizing: "border-box",
        maxWidth: "929px",
        minWidth: "250px",
    }

    return <div style={containerStyles}>{children}</div>
}

export default ArticleContainer
