import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const ExtendedSearchBoxContainer = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { md } = useBreakpoint()

    const containerStyles: React.CSSProperties = {
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "18px",
        background: "#315680",
        maxWidth: "633px",
        minHeight: "260px",
        marginLeft: "11px",
        marginRight: "18px",
        paddingLeft: "32px",
        paddingRight: "32px",
        boxSizing: "border-box",
        ...(md && {
            fontSize: "16px",
            lineHeight: "18px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "40px",
            marginLeft: "5px",
            marginRight: "5px",
        }),
    }

    return <div style={containerStyles}>{children}</div>
}

export default ExtendedSearchBoxContainer
