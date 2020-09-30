import * as React from "react"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const MapBlockSection = ({
    img,
    children,
}: {
    img: any
    children: React.ReactNode
}) => {
    const { md, sm, xs, ss } = useBreakpoint()

    const imgContainerStyles: React.CSSProperties = {
        minHeight: "192px",
        flexBasis: "30%",
        display: "flex",
        flexDirection: "column",
        flexShrink: 1,
        flexGrow: 1,
        ...(md && {
            marginLeft: "0px",
        }),
    }

    const imgTextStyles: React.CSSProperties = {
        paddingLeft: "9px",
        paddingRight: "9px",
        margin: "auto",
        marginBottom: "auto",
        fontFamily: "Arial",
        fontSize: "10px",
        lineHeight: "12px",
        color: "#FFFFFF",
        textAlign: "left",
    }

    const imgStyles: React.CSSProperties = {
        marginBottom: "0px",
        ...(md && {
            minHeight: "344px",
        }),
        ...(sm && {
            minHeight: "326px",
        }),
        ...(xs && {
            minHeight: "229px",
        }),
        ...(ss && {
            minHeight: "171px",
        }),
    }

    const imgTextContainerStyles: React.CSSProperties = {
        background: "#326B9D",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        paddingTop: "8px",
        paddingBottom: "10px",
        display: "flex",
        maxHeight: "70px",
        alignContent: "flex-start",
    }

    return (
        <div style={imgContainerStyles}>
            <img style={imgStyles} src={img} />
            <div style={imgTextContainerStyles}>
                <p style={imgTextStyles}>{children}</p>
            </div>
        </div>
    )
}

export default MapBlockSection
