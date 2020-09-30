import * as React from "react"
import previewLogo from "./images/previewImg.png"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const Preview = () => {
    const { md } = useBreakpoint()

    const previewLogoStyles: React.CSSProperties = {
        marginTop: "5px",
        minWidth: "97%",
        ...(md && {
            minWidth: "100%",
            marginTop: "10px",
        }),
    }

    return <img src={previewLogo} style={previewLogoStyles}></img>
}

export default Preview
