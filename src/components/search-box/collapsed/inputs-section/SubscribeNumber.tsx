import * as React from "react"
import Label from "./components/Label"
import AdditionalBox from "./components/AddBox"
import ArrowBlock from "./components/ArrowBlock"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const SubscribeNumber = ({
    value1,
    value2,
    inputHandler1,
    inputHandler2,
    clickHandler1,
    clickHandler2,
}: {
    value1: string
    value2: string
    inputHandler1(name: string, value: string): void
    inputHandler2(name: string, value: string): void
    clickHandler1(name: string, key: "up" | "down"): void
    clickHandler2(name: string, key: "up" | "down"): void
}) => {
    const [hover1, setHover1] = React.useState(false)
    const [hover2, setHover2] = React.useState(false)
    const { ss, md } = useBreakpoint()

    const subNumberContainer: React.CSSProperties = {
        display: "block",
        minWidth: "102px",
        flexBasis: "102px",
        maxWidth: "138px",
        position: "relative",
        flexGrow: 4,
        ...(md && { maxWidth: "126px" }),
    }

    const blocksWrapper: React.CSSProperties = {
        display: "flex",
        width: "100%",
    }

    let offset1 = "75px"
    if (md) offset1 = "69.5px"
    if (ss) offset1 = "54%"

    let offset2 = "7.5px"
    if (md) offset2 = "7px"
    if (ss) offset2 = "4.5px"

    return (
        <div style={subNumberContainer}>
            <Label label={"Subscriber number"} />
            <div style={blocksWrapper}>
                <AdditionalBox
                    name="subscriber1"
                    value={value1}
                    inputHandler={inputHandler1}
                    setHover={setHover1}
                />
                <ArrowBlock
                    name="subscriber1"
                    clickHandler={clickHandler1}
                    right={offset1}
                    inputHover={hover1}
                />
                <AdditionalBox
                    name="subscriber2"
                    value={value2}
                    inputHandler={inputHandler2}
                    setHover={setHover2}
                />
                <ArrowBlock
                    name="subscriber2"
                    clickHandler={clickHandler2}
                    right={offset2}
                    inputHover={hover2}
                />
            </div>
        </div>
    )
}

export default SubscribeNumber
