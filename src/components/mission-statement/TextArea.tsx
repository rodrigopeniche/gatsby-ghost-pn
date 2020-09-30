import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const TextArea = () => {
    const { mmd, msm, wmd } = useBreakpoint()

    const headerStyles: React.CSSProperties = {
        fontFamily: "Georgia",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "36px",
        lineHeight: "41px",
        color: "#FFFFFF",
        marginBottom: "0",
        marginTop: "0",
        display: "flex",
        justifyContent: "normal",
        ...(mmd && {
            justifyContent: "center",
        }),
        ...(msm && {
            fontSize: "44px",
            lineHeight: "50px",
            marginTop: "5px",
            marginBottom: "30px",
        }),
    }

    const textAreaStyles: React.CSSProperties = {
        marginTop: "5px",
        marginLeft: "24px",
        display: "flex",
        flexDirection: "column",
        ...(mmd && {
            marginTop: "25px",
        }),
        ...(wmd && {
            marginLeft: "0",
        }),
    }

    const paragraphStyles: React.CSSProperties = {
        fontFamily: "Georgia",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "19px",
        lineHeight: "34px",
        textAlign: "center",
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "normal",
        margin: "0",
        ...(mmd && {
            justifyContent: "center",
        }),
        ...(msm && {
            fontSize: "24px",
            margin: "0 40px 40px 40px",
        }),
    }

    return (
        <div style={textAreaStyles}>
            <h1 style={headerStyles}>Mission statement</h1>
            <p style={paragraphStyles}>
                is placeholder text commonly used in the graphic
            </p>
        </div>
    )
}

export default TextArea
