import * as React from "react"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const ResultsContainer = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { md } = useBreakpoint()

    const containerStyles: React.CSSProperties = {
        paddingTop: "30px",
        paddingBottom: "8px",
        ...(md && {
            paddingBottom: "0px",
        }),
    }
    return <div style={containerStyles}>{children}</div>
}

export default ResultsContainer
