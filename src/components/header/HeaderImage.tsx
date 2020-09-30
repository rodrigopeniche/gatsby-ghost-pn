import * as React from "react"
import phus from "./images/phus.png"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const HeaderImage = () => {
    const { md, wsm } = useBreakpoint()

    const imageContainerStyles: React.CSSProperties = {
        position: "absolute",
        width: "174px",
        height: "130px",
        marginTop: "-15px",
        left: "calc((100% - 174px)/2)",
        top: "calc((100% - 130px)/2)",
        ...(md && {
            position: "static",
            order: 0,
            marginTop: "0px",
        }),
        ...(wsm && {
            top: "calc((100% - 130px)/2 - 30%)",
        }),
    }

    const imageStyles: React.CSSProperties = {
        marginBottom: "0px",
        marginTop: "15px",
    }

    return (
        <div style={imageContainerStyles}>
            <img style={imageStyles} src={phus} />
        </div>
    )
}

export default HeaderImage
