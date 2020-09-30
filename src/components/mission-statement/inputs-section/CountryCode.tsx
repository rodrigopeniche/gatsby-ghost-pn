import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const Code = () => {
    const { msm } = useBreakpoint()

    const numberStyles: React.CSSProperties = {
        fontSize: "30px",
        color: "#FFFFFF",
        lineHeight: "34px",
        marginBottom: "0px",
        paddingBottom: "2.5px",
        verticalAlign: "middle",
        display: "inline-block",
        alignSelf: "flex-end",
        ...(msm && {
            paddingBottom: "6px",
        }),
    }

    return <p style={numberStyles}>{"1"}</p>
}

export default Code
