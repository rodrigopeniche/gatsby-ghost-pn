import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const Underline = () => {
    const { md } = useBreakpoint()

    const underlineStyles: React.CSSProperties = {
        opacity: "0.23",
        borderBottom: "1.3px solid #FFFFFF",
        marginLeft: "-16px",
        marginRight: "-16px",
        ...(md && {
            marginLeft: "0px",
            marginRight: "0px",
        }),
    }

    return <div style={underlineStyles} />
}

export default Underline
