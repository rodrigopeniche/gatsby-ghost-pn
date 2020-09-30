import * as React from "react"

const Label = ({ label }: { label: string }) => {
    const labelStyles: React.CSSProperties = {
        fontFamily: "Arial",
        fontStyle: "normal",
        fontSize: "12px",
        color: "#FFFFFF",
        marginBottom: "0px",
        paddingBottom: "8px",
        display: "block",
        textAlign: "center",
    }

    return <label style={labelStyles}>{label}</label>
}

export default Label
