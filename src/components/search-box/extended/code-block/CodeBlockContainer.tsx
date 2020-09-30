import * as React from "react"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const CodeBlockContainer = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { md } = useBreakpoint()

    const containerStyles: React.CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingTop: "28px",
        paddingBottom: "28px",
        ...(md && {
            paddingBottom: "20px",
        }),
    }

    return <div style={containerStyles}>{children}</div>
}

export default CodeBlockContainer
