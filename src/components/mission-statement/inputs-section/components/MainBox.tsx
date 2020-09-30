import * as React from "react"
import "./RemoveArrows.css"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const MainBox = ({
    name,
    value,
    inputHandler,
}: {
    name: string
    value: string
    inputHandler(name: string, value: string): void
}) => {
    const { md } = useBreakpoint()

    const mainBoxesStyles: React.CSSProperties = {
        maxWidth: "70px",
        minWidth: "50px",
        boxSizing: "border-box",
        height: "33px",
        marginTop: "0px",
        textAlign: "center",
        background: "#FFFAC1",
        border: "none",
        borderRadius: "5px",
        marginRight: "2px",
        marginLeft: "2px",
        marginBottom: "0px",
        display: "inline-block",
        ...(md && { marginRight: "4px", marginLeft: "4px" }),
    }

    return (
        <input
            type="number"
            name={name}
            size={4}
            value={value?.substr(0, 4) || ""}
            style={mainBoxesStyles}
            onChange={e => inputHandler(name, e.target.value)}
            required
        />
    )
}

export default MainBox
