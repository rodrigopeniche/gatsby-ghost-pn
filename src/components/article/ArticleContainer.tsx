import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const ArticleContainer = ({
    children,
    missionStatement,
}: {
    children: React.ReactNode[] | React.ReactNode
    missionStatement?: boolean
}) => {
    const { md } = useBreakpoint()

    const containerStyles: React.CSSProperties = {
        marginLeft: "11px",
        marginRight: "18px",
        minWidth: "200px",
        boxSizing: "content-box",
        gridArea: "article",
        maxWidth: "633px",
        ...(md && {
            marginLeft: "5px",
            marginRight: "5px",
        }),
    }

    const missionStatementContainerStyles: React.CSSProperties = {
        marginLeft: "11px",
        marginRight: "11px",
        boxSizing: "border-box",
        maxWidth: "929px",
        minWidth: "250px",
    }

    return (
        <div
            style={
                missionStatement
                    ? missionStatementContainerStyles
                    : containerStyles
            }
        >
            {children}
        </div>
    )
}

export default ArticleContainer
