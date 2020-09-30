import * as React from "react"
import articleLogo from "./images/articleLogo.png"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const Article = () => {
    const { md } = useBreakpoint()

    const articleStyles: React.CSSProperties = {
        marginRight: "15px",
        minWidth: "97%",
        alignContent: "center",
        ...(md && {
            minWidth: "100%",
            marginTop: "0",
        }),
    }

    return <img src={articleLogo} style={articleStyles}></img>
}

export default Article
