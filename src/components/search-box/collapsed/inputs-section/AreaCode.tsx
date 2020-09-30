import * as React from "react"
import MainBox from "./components/MainBox"
import Label from "./components/Label"
import ArrowBlock from "./components/ArrowBlock"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const AreaCode = ({
    value,
    inputHandler,
    clickHandler,
}: {
    value: string
    inputHandler(name: string, value: string): void
    clickHandler(name: string, key: "up" | "down"): void
}) => {
    const [hover, setHover] = React.useState(false)
    const { ss, ms, md } = useBreakpoint()

    const areaContainerStyles: React.CSSProperties = {
        display: "flex",
        minWidth: "58px",
        maxWidth: "104px",
        flexBasis: "58px",
        position: "relative",
        flexGrow: 1,
        ...(md && { maxWidth: "78px" }),
    }
    const paragraphStyles: React.CSSProperties = {
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "30px",
        lineHeight: "34px",
        color: "#FFFFFF",
        marginBottom: "0px",
        alignSelf: "flex-end",
        ...(md && { display: "none" }),
    }

    const numberStyles: React.CSSProperties = {
        position: "absolute",
        fontSize: "12px",
        left: "-14px",
        color: "#FFFFFF",
        lineHeight: "34px",
        marginBottom: "0px",
        verticalAlign: "middle",
        display: "none",
        alignSelf: "flex-end",
        ...(ms && {
            display: "inline-block",
        }),
    }

    let offset = "20px"
    if (md) offset = "6px"
    if (ss) offset = "2px"

    return (
        <div style={areaContainerStyles}>
            <p style={numberStyles}>{"+1"}</p>
            <p style={paragraphStyles}>{"("}</p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: "84px",
                }}
            >
                <Label label={"Area code"} />
                <MainBox
                    name="area-code"
                    value={value}
                    inputHandler={inputHandler}
                    setHover={setHover}
                />
                <ArrowBlock
                    name="area-code"
                    clickHandler={clickHandler}
                    right={offset}
                    inputHover={hover}
                />
            </div>
            <p style={paragraphStyles}>{")"}</p>
        </div>
    )
}

export default AreaCode
