import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const Details = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { md } = useBreakpoint()

    const detailsContainerStyles: React.CSSProperties = {
        maxWidth: "633px",
        ...(md && {
            width: "100%",
        }),
        margin: "none",
    }

    const mainHeaderStyles: React.CSSProperties = {
        fontFamily: "Georgia",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "27px",
        color: "#305983",
        marginTop: "0",
        marginLeft: "5px",
        ...(md && {
            fontSize: "32px",
            lineHeight: "36px",
        }),
        ...(!md && {
            marginTop: "-29px",
        }),
    }

    const phoneDetailsHeaderStyles: React.CSSProperties = {
        fontFamily: "Georgi",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "20px",
        color: "#44444",
        paddingTop: "19px",
        ...(md && {
            fontSize: "24px",
            lineHeight: "27px",
        }),
    }

    const underlineStyles: React.CSSProperties = {
        borderBottom: "1.7px solid #D30100",
        marginTop: "0",
        marginRight: "7px",
        ...(!md && {
            marginTop: "-23px",
        }),
        ...(md && {
            width: "100%",
        }),
    }

    return (
        <div style={detailsContainerStyles}>
            <h1 style={mainHeaderStyles}>Results Include</h1>
            <div style={underlineStyles}></div>
            <h1 style={phoneDetailsHeaderStyles}>Full Phone Details:</h1>
            {children}
        </div>
    )
}

export default Details
