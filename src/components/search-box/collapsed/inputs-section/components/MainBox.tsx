import * as React from "react"
import "./RemoveArrows.css"
import { useBreakpoint } from "../../../../../hooks/useBreakpoints"

const MainBox = ({
    name,
    value,
    inputHandler,
    setHover,
}: {
    name: string
    value: string
    inputHandler(name: string, value: string): void
    setHover: Function
}) => {
    const { md } = useBreakpoint()

    const mainBoxesStyles: React.CSSProperties = {
        maxWidth: "70px",
        minWidth: "50px",
        boxSizing: "border-box",
        height: "33px",
        marginTop: "0px",
        background: "#FFFAC1",
        border: "none",
        borderRadius: "5px",
        marginRight: "8px",
        marginLeft: "8px",
        marginBottom: "0px",
        display: "inline-block",
        textAlign: "center",
        ...(md && { marginRight: "4px", marginLeft: "4px" }),
    }

    return (
        <input
            type="number"
            name={name}
            size={3}
            value={value?.substr(0, 3) || ""}
            style={mainBoxesStyles}
            onChange={e => inputHandler(name, e.target.value)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            disabled
            required
        />
    )
}

export default MainBox
