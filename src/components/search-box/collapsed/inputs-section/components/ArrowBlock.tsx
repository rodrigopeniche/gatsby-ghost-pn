import * as React from "react"
import UpArrow from "./UpArrow"
import DownArrow from "./DownArrow"

const ArrowBlock = ({
    name,
    clickHandler,
    inputHover = false,
    right = "0px",
    bottom = "0px",
}: {
    name: string
    clickHandler(name: string, key: "up" | "down"): void
    inputHover?: boolean
    right?: string | number
    bottom?: string | number
}) => {
    const [hover, setHover] = React.useState(false)

    const arrowContainerStyles: React.CSSProperties = {
        position: "absolute",
        height: "33px",
        width: "14px",
        right,
        bottom,
    }

    if (!hover && !inputHover) return null

    return (
        <div
            style={arrowContainerStyles}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <UpArrow blockClickHandler={() => clickHandler(name, "up")} />
            <DownArrow blockClickHandler={() => clickHandler(name, "down")} />
        </div>
    )
}

export default ArrowBlock
