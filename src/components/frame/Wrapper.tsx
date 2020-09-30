import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const Wrapper = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    if (typeof window === "undefined") return null
    const { asm, fmd, fsm, wmd, wsm, wxs, wms } = useBreakpoint()

    const wrapperStyles: React.CSSProperties = {
        width: "960px",
        ...(wxs && {
            width: "940px",
        }),
        ...(fmd && {
            width: "790px",
        }),
        ...(wsm && {
            width: "640px",
        }),
        ...(wmd && {
            width: "530px",
        }),
        ...(fsm && {
            width: "auto",
        }),
        margin: "0 auto",
    }

    return <div style={wrapperStyles}>{children}</div>
}

export default Wrapper
