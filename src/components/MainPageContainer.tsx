import * as React from "react"
import { useBreakpoint } from "../hooks/useBreakpoints"

const MainPageContainer = ({
    children,
}: {
    children: React.ReactNode[] | React.ReactNode
}) => {
    const { md } = useBreakpoint()

    const mainPageContainerStyles: React.CSSProperties = {
        display: "grid",
        gridTemplateRows: "auto auto",
        gridTemplateColumns: "70% 30%",
        gridTemplateAreas: `
            'header header'
            'search-box sidebar'
            'article sidebar'
        `,
        ...(md && {
            gridTemplateRows: "auto auto auto auto",
            gridTemplateColumns: "100%",
            gridTemplateAreas: `
                'header'
                'search-box'
                'sidebar'
                'article'
            `,
        }),
    }

    return <div style={mainPageContainerStyles}>{children}</div>
}

export default MainPageContainer
