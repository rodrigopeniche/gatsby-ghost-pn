import * as React from "react"
import MainBox from "./components/MainBox"
import Label from "./components/Label"
import ArrowBlock from "./components/ArrowBlock"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const Exchange = ({
    value,
    inputHandler,
    clickHandler,
}: {
    value: string
    inputHandler(name: string, value: string): void
    clickHandler(name: string, key: "up" | "down"): void
}) => {
    const [hover, setHover] = React.useState(false)
    const { ss, md } = useBreakpoint()

    const exchangeContainerStyles: React.CSSProperties = {
        display: "flex",
        position: "relative",
        flexDirection: "column",
        minWidth: "58px",
        maxWidth: "84px",
        flexBasis: "58px",
        flexGrow: 1,
        ...(md && { maxWidth: "78px" }),
    }

    let offset = "10px"
    if (md) offset = "6px"
    if (ss) offset = "2px"

    return (
        <div style={exchangeContainerStyles}>
            <Label label={"Exchange"} />
            <MainBox
                name="exchange"
                value={value}
                inputHandler={inputHandler}
                setHover={setHover}
            />
            <ArrowBlock
                name="exchange"
                clickHandler={clickHandler}
                right={offset}
                inputHover={hover}
            />
        </div>
    )
}

export default Exchange
