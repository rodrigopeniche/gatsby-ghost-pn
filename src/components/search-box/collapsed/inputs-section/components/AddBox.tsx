import * as React from "react"
import "./RemoveArrows.css"
import { useBreakpoint } from "../../../../../hooks/useBreakpoints"

const AddBox = ({
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

    const additionalBoxesStyles: React.CSSProperties = {
        maxWidth: "59px",
        minWidth: "39px",
        boxSizing: "border-box",
        height: "33px",
        marginTop: "0px",
        background: "#FFFAC1",
        border: "none",
        borderRadius: "5px",
        marginRight: "5px",
        marginLeft: "5px",
        marginBottom: "0px",
        display: "inline-block",
        textAlign: "center",
        ...(md && {
            marginRight: "4px",
            marginLeft: "4px",
        }),
    }

    return (
        <input
            type="number"
            name={name}
            size={2}
            value={value?.substr(0, 2) || ""}
            style={additionalBoxesStyles}
            onChange={e => inputHandler(name, e.target.value)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            required
            disabled
        />
    )
}

export default AddBox
