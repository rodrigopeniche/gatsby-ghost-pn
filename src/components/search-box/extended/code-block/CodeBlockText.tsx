import * as React from "react"
import ImagesSection from "./ImagesSection"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const CodeBlockText = ({
    title,
    children,
}: {
    title: string
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { md } = useBreakpoint()

    const mainTextStyle: React.CSSProperties = {
        fontFamily: "Georgia",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "20px",
        color: "#FFFFFF",
        marginBottom: "15px",
        display: "block",
        ...(md && {
            marginBottom: "10px",
            fontSize: "24px",
            lineHeight: "27px",
        }),
    }

    const codeBlockParagraphStyles: React.CSSProperties = {
        color: "#FFFFFF",
        display: "block",
        marginBottom: "10px",
        ...(md && {
            marginBottom: "20px",
            lineHeight: "22px",
        }),
    }

    const codeBlockContainer: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        flexBasis: "60%",
        boxSizing: "content-box",
        justifyContent: "flex-start",
        flexGrow: 1,
        marginRight: "30px",
        ...(md && {
            flexBasis: "100%",
            marginRight: "0px",
            paddingBottom: "28px",
        }),
    }

    return (
        <div style={codeBlockContainer}>
            <h1 style={mainTextStyle}>{title}</h1>
            <p style={codeBlockParagraphStyles}>{children}</p>
            <ImagesSection />
        </div>
    )
}

export default CodeBlockText
