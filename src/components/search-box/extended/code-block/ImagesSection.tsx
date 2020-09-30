import * as React from "react"
import att from "./images/att.png"
import telekom from "./images/telekom.png"
import verizon from "./images/verizon.png"
import sprint from "./images/sprint.png"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const ImagesSection = () => {
    const { md } = useBreakpoint()

    const imageBlockContainerStyles: React.CSSProperties = {
        minHeight: "28px",
        marginTop: "auto",
    }

    const singleImageStyles: React.CSSProperties = {
        display: "inline-block",
        marginBottom: "0px",
        ...(md && {
            marginBottom: "10px",
        }),
    }

    const imgStyles: React.CSSProperties = {
        marginBottom: "0px",
        minHeight: "28px",
        verticalAlign: "middle",
    }

    const disclaimerStyles: React.CSSProperties = {
        fontFamily: "Arial",
        fontSize: "10px",
        color: "#7491AD",
        marginBottom: "0px",
    }

    const imagesContainerStyles: React.CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    }

    const imageItems = [
        { image: att, styles: {} },
        { image: telekom, styles: {} },
        { image: verizon, styles: { marginTop: "3px" } },
        { image: sprint, styles: {} },
    ]

    return (
        <div style={imageBlockContainerStyles}>
            <div style={imagesContainerStyles}>
                {imageItems.map(({ image, styles }, i) => (
                    <div
                        style={{
                            ...singleImageStyles,
                            ...styles,
                        }}
                        key={i}
                    >
                        <img style={imgStyles} src={image} />
                    </div>
                ))}
            </div>
            <p style={disclaimerStyles}>operate in this area</p>
        </div>
    )
}

export default ImagesSection
