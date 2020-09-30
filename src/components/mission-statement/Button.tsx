import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const Button = () => {
    const { md, axs, mmd, msm } = useBreakpoint()

    const [value, setValue] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const handleResize = () => setValue(window.innerWidth)

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    })

    const getTextButton = (windowWidth: number): string => {
        const searchButton = "SEARCH"
        const proceedButton = "PROCEED"

        if (msm) {
            return proceedButton
        }
        if (!msm) {
            return searchButton
        }

        return windowWidth.toString()
    }

    const buttonStyles: React.CSSProperties = {
        float: "right",
        display: "inline-block",
        background: "linear-gradient(180deg, #FD1D00 0%, #B81200 100%)",
        borderRadius: "5px",
        height: "34px",
        width: "100%",
        filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.6))",
        ...(md && {
            width: "100%",
        }),
        ...(axs && {
            height: "60px",
            paddingTop: "15px",
            borderRadius: "10px",
        }),
        marginRight: "21px",
        ...(mmd && {
            marginRight: "0",
        }),
    }

    const buttonTextStyles: React.CSSProperties = {
        fontFamily: "Georgia",
        fontWeight: "bold",
        fontSize: "15px",
        lineHeight: "37px",
        color: "#FFFFFF",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: "0",
        ...(msm && {
            fontSize: "22px",
            lineHeight: "34px",
        }),
    }

    const buttonContainerStyles: React.CSSProperties = {
        display: "block",
        textAlign: "center",
        margin: "39px 0 0 0",
        width: "113px",
        ...(mmd && {
            margin: "39px 0px 20px 10px",
        }),
        ...(msm && {
            margin: "39px 0px 40px 0px",
            width: "90%",
        }),
    }

    return (
        <div style={buttonContainerStyles}>
            <div style={buttonStyles}>
                <h1 style={buttonTextStyles}>{getTextButton(value)}</h1>
            </div>
        </div>
    )
}

export default Button
