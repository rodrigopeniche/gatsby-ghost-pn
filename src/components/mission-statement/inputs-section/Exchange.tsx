import * as React from "react"
import MainBox from "./components/MainBox"
import Label from "./components/Label"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const Exchange = ({
    value,
    inputHandler,
}: {
    value: string
    inputHandler(name: string, value: string): void
}) => {
    const { md } = useBreakpoint()

    const exchangeContainerStyles: React.CSSProperties = {
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
        <div style={exchangeContainerStyles}>
            <Label label={"Exchange"} />
            <MainBox
                name="exchange"
                value={value}
                inputHandler={inputHandler}
            />
        </div>
    )
}

export default Exchange
