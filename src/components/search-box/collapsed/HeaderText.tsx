import * as React from "react"
import Underline from "./CollapsedUnderline"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const HeaderText = () => {
    const { xs, sm, ms, md, ss } = useBreakpoint()

    const containerStyles: React.CSSProperties = {
        paddingTop: "41px",
        display: "block",
        ...(xs && {
            paddingTop: "30px",
        }),
    }

    const mainTextStyles: React.CSSProperties = {
        fontFamily: "Georgia",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "36px",
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: "22px",
        ...(md && {
            fontSize: "42px",
        }),
        ...(sm && {
            fontSize: "41px",
        }),
        ...(xs && {
            fontSize: "40px",
        }),
        ...(ms && {
            fontSize: "36px",
        }),
        ...(ss && {
            fontSize: "30px",
        }),
    }

    return (
        <div style={containerStyles}>
            <h1 style={mainTextStyles}>Select a number</h1>
            <Underline />
        </div>
    )
}

export default HeaderText
