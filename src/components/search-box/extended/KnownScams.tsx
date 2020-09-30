import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const KnownScamsText = () => {
    const { md } = useBreakpoint()

    const mainTextStyle: React.CSSProperties = {
        fontFamily: "Georgia",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "20px",
        color: "#FFFFFF",
        marginBottom: "15px",
        ...(md && {
            marginBottom: "10px",
            fontSize: "24px",
            lineHeight: "27px",
        }),
    }

    const knownScamsParagraphStyles: React.CSSProperties = {
        color: "#FFFFFF",
        marginBottom: "18px",
        ...(md && {
            marginBottom: "40px",
        }),
    }

    const knownScamsFooterTextStyles: React.CSSProperties = {
        fontStyle: "italic",
        color: "#9DBEE1",
        marginBottom: "0px",
    }

    const containerStyles: React.CSSProperties = {
        paddingTop: "28px",
        paddingBottom: "18px",
        ...(md && {
            lineHeight: "22px",
        }),
    }

    return (
        <div style={containerStyles}>
            <h1 style={mainTextStyle}>{"Known Scams"}</h1>
            <p style={knownScamsParagraphStyles}>
                Phone scams are as common as they have ever been over a 20 year
                period. Newest scam techniques include the ability to trick
                caller id present on all phones to display a different number
                than the number being called from. Because of this, use caution
                when assuming a number is a scammer.
            </p>
            <p style={knownScamsFooterTextStyles}>
                This phone has been reported as a scam x times in the last year.
                It has been known for the IRS scam, the Gabe scam, the Dan scam,
                and the Alina scam. Because of this, please use caution when
                interacting with this number.
            </p>
        </div>
    )
}

export default KnownScamsText
