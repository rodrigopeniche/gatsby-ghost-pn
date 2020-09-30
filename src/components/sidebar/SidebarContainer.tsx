import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const SidebarContainer = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { md } = useBreakpoint()

    const sidebarContainerStyles: React.CSSProperties = {
        height: "100%",
        minWidth: "170px",
        gridArea: "sidebar",
        ...(md && {
            marginLeft: "5px",
            marginRight: "5px",
        }),
    }

    return <div style={sidebarContainerStyles}>{children}</div>
}

export default SidebarContainer
