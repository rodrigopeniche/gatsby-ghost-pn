import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const Main = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { md } = useBreakpoint()

    const mainStyles: React.CSSProperties = {
        paddingTop: "60px",
        ...(md && {
            paddingTop: "0px",
        }),
        background: "rgb(218,221,225)",
    }

    return <div style={mainStyles}>{children}</div>
}

export default Main
