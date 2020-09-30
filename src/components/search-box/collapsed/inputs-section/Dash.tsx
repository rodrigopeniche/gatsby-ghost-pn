import * as React from "react"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const Dash = () => {
    const { md } = useBreakpoint()

    const underlineBetweenStyles = {
        borderTop: "2px solid #FFFFFF",
        width: "17px",
        marginBottom: "18px",
        alignSelf: "flex-end",
        marginLeft: "4px",
        marginRight: "7px",
        ...(md && { display: "none" }),
    }

    return <div style={underlineBetweenStyles} />
}

export default Dash
