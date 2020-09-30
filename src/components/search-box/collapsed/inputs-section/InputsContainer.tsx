import * as React from "react"

const InputsContainer = ({ children }: { children: React.ReactNode[] }) => {
    const containerStyles: React.CSSProperties = {
        margin: "0 auto",
        paddingTop: "18px",
        textAlign: "center",
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: "normal",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        position: "relative",
    }

    return <div style={containerStyles}>{children}</div>
}

export default InputsContainer
