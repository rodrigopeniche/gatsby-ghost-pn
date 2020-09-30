import * as React from "react"
import Label from "./components/Label"
import MainBox from "./components/MainBox"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const SubscribeNumber = ({
    value,
    inputHandler,
}: {
    value: string
    inputHandler(name: string, value: string): void
}) => {
    const { md } = useBreakpoint()

    const subNumberContainer: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        minWidth: "58px",
        maxWidth: "63px",
        flexBasis: "58px",
        position: "relative",
        flexGrow: 1,
        ...(md && {
            maxWidth: "78px",
        }),
    }

    return (
        <div style={subNumberContainer}>
            <Label label={"Subscriber"} />
            <MainBox
                name="subscribe"
                value={value}
                inputHandler={inputHandler}
            />
        </div>
    )
}

export default SubscribeNumber
