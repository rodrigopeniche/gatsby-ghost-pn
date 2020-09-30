import * as React from "react"
import MainBox from "./components/MainBox"
import Label from "./components/Label"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const AreaCode = ({
    value,
    inputHandler,
}: {
    value: string
    inputHandler(name: string, value: string): void
}) => {
    const { msm } = useBreakpoint()

    const areaCodeContainerStyles: React.CSSProperties = {
        display: "flex",
        minWidth: "78px",
        maxWidth: "98px",
        flexBasis: "78px",
        flexGrow: 1,
        marginRight: "5px",
    }

    const paragraphStyles: React.CSSProperties = {
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "30px",
        paddingBottom: "5px",
        lineHeight: "34px",
        color: "#FFFFFF",
        marginBottom: "0px",
        alignSelf: "flex-end",
        ...(msm && {
            paddingBottom: "5px",
        }),
    }

    const additionalContainerStyles: React.CSSProperties = {
        display: "flex",
        position: "relative",
        flexDirection: "column",
        width: "100%",
        maxWidth: "78px",
        minWidth: "58px",
        flexGrow: 1,
        flexBasis: "58px",
    }

    return (
        <div style={areaCodeContainerStyles}>
            <p style={paragraphStyles}>{"("}</p>
            <div style={additionalContainerStyles}>
                <Label label={"Area code"} />
                <MainBox
                    name={"area-code"}
                    value={value}
                    inputHandler={inputHandler}
                />
            </div>
            <p style={paragraphStyles}>{")"}</p>
        </div>
    )
}

export default AreaCode
