import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const ButtonContainer = ({ children }: { children: React.ReactNode[] }) => {
    const { md } = useBreakpoint()

    const buttonContainerStyles: React.CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        ...(md && {
            order: 2,
        }),
    }

    return <div style={buttonContainerStyles}>{children}</div>
}

export default ButtonContainer
