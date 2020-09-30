import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const Label = ({stateKey}: {stateKey: string}) => {
    const { md } = useBreakpoint()

    const labelStyles: React.CSSProperties = {
        color: "#91A6BC",
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "18px",
        textAlign: "center",
        ...(md && {
            fontSize: "15px",
            lineHeight: "17px",
            order: 1,
            margin: "15px 0 10px",
        }),
    }

    return <div style={labelStyles}>{stateKey} phone number lookups</div>
}

export default Label
