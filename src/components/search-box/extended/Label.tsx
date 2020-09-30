import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const Label = () => {
    const { md } = useBreakpoint()

    const labelStyles: React.CSSProperties = {
        lineHeight: "14px",
        color: "#FFFAC1",
        marginBottom: "0px",
        ...(md && {
            lineHeight: "18px",
        }),
    }

    const labelContainerStyles: React.CSSProperties = {
        paddingBottom: "9px",
        marginLeft: "-16px",
        marginRight: "-16px",
        textAlign: "left",
        ...(md && {
            paddingBottom: "20px",
            marginLeft: "0px",
            marginRight: "0px",
            textAlign: "center",
        }),
    }

    const label =
        "Based on the information in your query, this phone number originates from:"

    return (
        <div style={labelContainerStyles}>
            <p style={labelStyles}>{label}</p>
        </div>
    )
}

export default Label
