import * as React from "react"

const underlineBetweenStyles: React.CSSProperties = {
    borderTop: "2px solid #FFFFFF",
    width: "17px",
    marginBottom: "18px",
    alignSelf: "flex-end",
    marginLeft: "7px",
    marginRight: "7px",
}

const Dash = () => {
    return <div style={underlineBetweenStyles} />
}

export default Dash
