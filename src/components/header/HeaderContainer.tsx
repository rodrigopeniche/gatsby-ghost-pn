import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const HeaderContainer = ({
    children,
    missionStatement = false,
}: {
    children: React.ReactNode[] | React.ReactNode
    missionStatement?: boolean
}) => {
    const { md, fmd, wxs, wsm } = useBreakpoint()

    const headerContainerStyles: React.CSSProperties = {
        textTransform: "uppercase",
        background:
            "linear-gradient(0deg, rgba(196, 196, 196, 0) 0.58%, rgba(196, 196, 196, 0.3) 18px, rgba(196, 196, 196, 0) 19px",
        height: "36px",
        margin: "-5px -5px 0",
        minWidth: "200px",
        ...(fmd && {
            margin: "0 -10px",
        }),
        padding: "0 12px 0 16px",
        ...(missionStatement && {
            padding: "0 16px",
        }),
        ...(wxs && {
            padding: "0 10px 0 21px",
            ...(missionStatement && {
                padding: "0 22px",
            }),
        }),
        ...(wsm && {
            padding: "75px 10px 0 21px",
            ...(missionStatement && {
                padding: "75px 22px 0",
            }),
            background:
                "linear-gradient(0deg, rgba(196, 196, 196, 0) 0.58%, rgba(196, 196, 196, 0.15) 18px, rgba(196, 196, 196, 0) 19px",
        }),
        ...(md && {
            maxWidth: "633px",
            flexDirection: "column",
            padding: "15px 12px 35px 15px",
            ...(missionStatement && {
                padding: "12px 21px 35px",
            }),
            height: "auto",
            background: "initial",
        }),
        ...(missionStatement && {
            maxWidth: "929px",
            minWidth: "250px",
        }),
        boxSizing: "content-box",
        position: "relative",
        gridArea: "header",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    return <div style={headerContainerStyles}>{children}</div>
}

export default HeaderContainer
