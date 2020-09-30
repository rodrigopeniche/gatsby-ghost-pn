import * as React from "react"
import background from "./images/background.png"
import topBlock from "./images/top-block.png"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const MissionStatementContainer = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { msm, mxs } = useBreakpoint()

    const msContainerStyles: React.CSSProperties = {
        backgroundImage: `url(${background})`,
        ...(msm && {
            backgroundImage: `url(${topBlock})`,
        }),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxWidth: "929px",
        minWidth: "250px",
        minHeight: "187px",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        textAlign: "left",
        justifyContent: "space-between",
        marginLeft: "11px",
        marginRight: "11px",
        boxSizing: "border-box",
        borderRadius: "5px",
        ...(mxs && {
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
        }),
    }

    return <div style={msContainerStyles}>{children}</div>
}

export default MissionStatementContainer
