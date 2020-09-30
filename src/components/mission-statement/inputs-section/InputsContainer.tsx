import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const InputsContainer = ({ children }: { children: React.ReactNode[] }) => {
    const { msm, mmd, mms, iss } = useBreakpoint()

    const containerStyles: React.CSSProperties = {
        marginTop: "13px",
        marginRight: "-50px",
        textAlign: "center",
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: "normal",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        position: "relative",
        height: "60px",
        width: "262px",
        ...(msm && {
            width: "92%",
            height: "66px",
            marginRight: "auto",
            marginLeft: "auto",
        }),
        ...(mmd && {
            marginRight: "0",
            marginLeft: "0",
        }),
        ...(mms && {
            marginTop: "0",
        }),
        ...(iss && {
            height: "auto",
        }),
    }

    return <div style={containerStyles}>{children}</div>
}

export default InputsContainer
