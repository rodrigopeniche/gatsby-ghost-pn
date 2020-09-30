import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const ProceedButton = () => {
    const { md } = useBreakpoint()

    const buttonStyles: React.CSSProperties = {
        display: "inline-block",
        background: "linear-gradient(180deg, #FD1D00 0%, #B81200 100%)",
        borderRadius: "3px",
        height: "37px",
        width: "115px",
        filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.6))",
        ...(md && {
            width: "100%",
        }),
    }

    const buttonTextStyles: React.CSSProperties = {
        fontFamily: "Georgia",
        fontWeight: "bold",
        fontSize: "15px",
        lineHeight: "37px",
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: "0px",
    }

    const buttonContainerStyles: React.CSSProperties = {
        display: "block",
        textAlign: "center",
        paddingTop: "30px",
        paddingBottom: "30px",
        ...(md && {
            paddingTop: "40px",
            paddingBottom: "40px",
        }),
    }

    return (
        <div style={buttonContainerStyles}>
            <div style={buttonStyles}>
                <h1 style={buttonTextStyles}>PROCEED</h1>
            </div>
        </div>
    )
}

export default ProceedButton
