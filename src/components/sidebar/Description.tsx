import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"
import * as ReactMarkdown from "react-markdown"
import "./sidebar.css"

const Description = ({ text }: { text: string }) => {
    const { md } = useBreakpoint()

    const descriptionContainerStyles: React.CSSProperties = {
        marginTop: "20px",
        ...(md && {
            width: "100%",
        }),
    }

    return (
        <div style={descriptionContainerStyles}>
            <ReactMarkdown
                className={"sidebar"}
                source={text}
                escapeHtml={false}
            />
        </div>
    )
}

export default Description
