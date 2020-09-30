import * as React from "react"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const Code = () => {
    const { ms, md } = useBreakpoint()

    const numberStyles: React.CSSProperties = {
        fontSize: "30px",
        color: "#FFFFFF",
        lineHeight: "34px",
        marginBottom: "0px",
        verticalAlign: "middle",
        display: "inline-block",
        marginRight: "10px",
        alignSelf: "flex-end",
        ...(md && {
            fontSize: "17px",
            marginRight: "4px",
        }),
        ...(ms && {
            display: "none",
        }),
    }

    return <p style={numberStyles}>{"+1"}</p>
}

export default Code
