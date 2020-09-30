import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"
import footerShadow from "./images/footer_shadow.png"

const FooterContainer = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { asm, fmd, fsm, wmd, wsm, wxs, wms } = useBreakpoint()

    const wrapperStyles: React.CSSProperties = {
        background: "rgb(218,221,225)",
    }

    const footerContainerStyles: React.CSSProperties = {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: `url(${footerShadow})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        width: "960px",
        ...(wxs && {
            width: "940px",
        }),
        ...(fmd && {
            width: "790px",
        }),
        ...(wsm && {
            width: "740px",
        }),
        ...(wms && {
            width: "749px",
        }),
        ...(asm && {
            width: "719px",
        }),
        ...(wmd && {
            width: "530px",
        }),
        ...(fsm && {
            width: "auto",
        }),
        margin: "0 auto",
    }

    return (
        <div style={wrapperStyles}>
            <div style={footerContainerStyles}>{children}</div>
        </div>
    )
}

export default FooterContainer
