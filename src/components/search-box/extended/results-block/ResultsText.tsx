import * as React from "react"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const ResultsText = () => {
    const { md } = useBreakpoint()

    const mainTextStyle: React.CSSProperties = {
        fontFamily: "Georgia",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "20px",
        color: "#FFFFFF",
        marginBottom: "10px",
        ...(md && {
            fontSize: "24px",
            lineHeight: "27px",
        }),
    }

    const resultsParagraphStyles: React.CSSProperties = {
        color: "#FFFFFF",
        marginBottom: "25px",
        ...(md && {
            marginBottom: "35px",
            lineHeight: "22px",
        }),
    }

    return (
        <>
            <h1 style={mainTextStyle}>{"Results"}</h1>
            <p style={resultsParagraphStyles}>
                There are <strong>3 known people</strong> or entities that have
                utilized this number in the last 13 years.
            </p>
        </>
    )
}

export default ResultsText
