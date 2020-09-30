import * as React from "react"
import warningMark from "./images/warning-mark.png"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const Warning = () => {
    const { md } = useBreakpoint()

    const warningBackgroundStyles: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#9E1214",
        borderRadius: "5px",
        minHeight: "28px",
        paddingLeft: "13px",
        paddingRight: "13px",
        paddingTop: "7px",
        paddingBottom: "7px",
        ...(md && {
            paddingTop: "13px",
            paddingBottom: "13px",
        }),
    }

    const warningTextStyles: React.CSSProperties = {
        lineHeight: "14px",
        color: "#FFFFFF",
        marginBottom: "0px",
        ...(md && {
            lineHeight: "22px",
        }),
    }

    const imageStyles: React.CSSProperties = {
        alignSelf: "flex-start",
        marginBottom: "-2px",
        marginRight: "8px",
        verticalAlign: "top",
        ...(md && {
            marginTop: "4px",
        }),
    }

    return (
        <div style={warningBackgroundStyles}>
            <img src={warningMark} style={imageStyles}></img>
            <p style={warningTextStyles}>
                The traces of the phone number have been reported existing at
                the dark web
            </p>
        </div>
    )
}

export default Warning
