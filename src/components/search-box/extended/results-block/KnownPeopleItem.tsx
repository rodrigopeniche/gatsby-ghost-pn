import * as React from "react"
import { useBreakpoint } from "../../../../hooks/useBreakpoints"

const KnownPeopleItem = ({
    handset,
    persoName,
    logo,
    mainTextStr1,
    mainTextStr2,
    footerText,
}: {
    handset: any
    persoName: string
    logo: any
    mainTextStr1: string
    mainTextStr2: string
    footerText: string
}) => {
    const { md } = useBreakpoint()

    const containerStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))",
        background: "rgba(55,118,173, 0.58)",
        paddingTop: "12px",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingBottom: "10px",
        marginBottom: "9px",
        ...(md && {
            paddingLeft: "23px",
            paddingRight: "23px",
            paddingBottom: "30px",
            marginBottom: "20px",
        }),
    }

    const mainTextStyles: React.CSSProperties = {
        lineHeight: "14px",
        marginBottom: "3px",
        color: "#FFFFFF",
        ...(md && {
            marginBottom: "13px",
            fontSize: "16px",
            lineHeight: "22px",
        }),
    }

    const footerTextStyles: React.CSSProperties = {
        fontStyle: "italic",
        lineHeight: "14px",
        color: "#FFFAC1",
        marginBottom: "0px",
        marginTop: "5px",
        ...(md && {
            marginTop: "17px",
            lineHeight: "22px",
        }),
    }

    return (
        <div style={containerStyles}>
            <NameSection handset={handset} persoName={persoName} logo={logo} />
            <p style={mainTextStyles}>{mainTextStr1}</p>
            <p style={mainTextStyles}>{mainTextStr2}</p>
            <p style={footerTextStyles}>{footerText}</p>
        </div>
    )
}

const NameSection = ({
    handset,
    persoName,
    logo,
}: {
    handset: any
    persoName: string
    logo: any
}) => {
    const { md } = useBreakpoint()

    const nameContainerStyles: React.CSSProperties = {
        display: "flex",
        paddingBottom: "3px",
        flexWrap: "wrap-reverse",
        ...(md && {
            paddingBottom: "15px",
        }),
    }

    const logoStyles: React.CSSProperties = {
        marginLeft: "auto",
        marginBottom: "0px",
        marginRight: "-30px",
        ...(md && {
            marginRight: "-15px",
        }),
    }

    const nameStyles: React.CSSProperties = {
        fontWeight: "normal",
        display: "inline-block",
        marginBottom: "0px",
        fontSize: "18px",
        lineHeight: "21px",
        color: "#FFFAC1",
        wordBreak: "break-word",
        ...(md && {
            fontSize: "22px",
            lineHeight: "34px",
        }),
    }

    const imageStyles: React.CSSProperties = {
        display: "inline-block",
        marginBottom: "0px",
        marginRight: "8px",
        marginLeft: "-25px",
        ...(md && {
            marginLeft: "0px",
        }),
    }

    return (
        <div style={nameContainerStyles}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <img style={imageStyles} src={handset} />
                <h1 style={nameStyles}>{persoName}</h1>
            </div>
            <img style={logoStyles} src={logo} />
        </div>
    )
}

export default KnownPeopleItem
