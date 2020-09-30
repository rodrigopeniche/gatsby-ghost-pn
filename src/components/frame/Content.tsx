import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const Content = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { fmd, fsm } = useBreakpoint()

    const frameContainerStyles: React.CSSProperties = {
        borderRadius: "7px 7px 0 0",
        padding: "5px",
        ...(fmd && {
            padding: "0 10px 0px 10px",
        }),
        ...(fsm && {
            padding: "0 10px 20px 10px",
            borderRadius: "0",
        }),
        display: "flex",
        background: "#FFF",
    }

    return <div style={frameContainerStyles}>{children}</div>
}

export default Content
