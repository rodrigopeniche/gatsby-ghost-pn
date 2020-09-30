import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const Button = ({
    text,
    href = "/",
    first = false,
    last = false,
}: {
    text: string
    href: string
    first?: boolean
    last?: boolean
}) => {
    const [hover, setHover] = React.useState(false)
    const { md, ss } = useBreakpoint()

    const buttonStyles: React.CSSProperties = {
        marginLeft: "auto",
        fontSize: "12px",
        lineHeight: "14px",
        color: "#305983",
        textDecoration: "none",
        ...(md && {
            fontSize: "15px",
            lineHeight: "17px",
        }),
        ...(hover && {
            color: "#D30000",
        }),
    }

    const buttonBeforeStyles: React.CSSProperties = {
        display: "inline-block",
        backgroundColor: "#ee0017",
        borderRadius: "50%",
        content: "",
        height: "5px",
        width: "5px",
        marginRight: "5px",
        ...(hover && {
            backgroundColor: "#305983",
        }),
    }

    const buttonWrapperStyles: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        marginLeft: "15px",
        marginTop: "5px",
        marginBottom: "5px",
        ...(md && {
            marginLeft: "25px",
        }),
        ...(first && {
            marginLeft: "0px",
        }),
        ...(ss &&
            last && {
                marginRight: "25px",
            }),
    }

    return (
        <div
            style={buttonWrapperStyles}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div style={buttonBeforeStyles} />
            <a href={href} style={buttonStyles}>
                {text}
            </a>
        </div>
    )
}

export default Button
