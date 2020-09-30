import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const ContactsList = () => {
    const [hover, setHover] = React.useState(null)
    const { sm } = useBreakpoint()

    const contactsListStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        margin: "0 auto 70px auto",
        flexWrap: "wrap",
        ...(sm && {
            justifyContent: "center",
        }),
    }

    const paragraphStyles: React.CSSProperties = {
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "18px",
        color: "#000000",
        marginRight: "10px",
        marginLeft: "10px",
    }

    const dashStyles: React.CSSProperties = {
        display: "none",
        ...(sm && {
            display: "block",
            marginLeft: "3px",
            marginRight: "3px",
        }),
    }

    const linkStyles: React.CSSProperties = {
        color: "black",
        textDecoration: "none",
    }

    return (
        <div style={contactsListStyles}>
            <p
                style={paragraphStyles}
                onMouseEnter={() => setHover("home")}
                onMouseLeave={() => setHover(null)}
            >
                <a
                    href="/"
                    style={{
                        ...linkStyles,
                        ...(hover === "home" && {
                            textDecoration: "underline",
                        }),
                    }}
                >
                    {"Home"}
                </a>
            </p>
            <p style={dashStyles}>|</p>
            <p
                style={paragraphStyles}
                onMouseEnter={() => setHover("faq")}
                onMouseLeave={() => setHover(null)}
            >
                <a
                    href="https://members.staterecords.org/customer/faq"
                    style={{
                        ...linkStyles,
                        ...(hover === "faq" && {
                            textDecoration: "underline",
                        }),
                    }}
                >
                    {"FAQ"}
                </a>
            </p>
            <p style={dashStyles}>|</p>
            <p
                style={paragraphStyles}
                onMouseEnter={() => setHover("help")}
                onMouseLeave={() => setHover(null)}
            >
                <a
                    href="https://members.staterecords.org/customer/help"
                    style={{
                        ...linkStyles,
                        ...(hover === "help" && {
                            textDecoration: "underline",
                        }),
                    }}
                >
                    {"Help"}
                </a>
            </p>
            <p style={dashStyles}>|</p>
            <p
                style={paragraphStyles}
                onMouseEnter={() => setHover("privacy")}
                onMouseLeave={() => setHover(null)}
            >
                <a
                    href="https://members.staterecords.org/customer/terms"
                    style={{
                        ...linkStyles,
                        ...(hover === "privacy" && {
                            textDecoration: "underline",
                        }),
                    }}
                >
                    {"Privacy"}
                </a>
            </p>
            <p style={dashStyles}>|</p>
            <p
                style={paragraphStyles}
                onMouseEnter={() => setHover("donotsellmyinfo")}
                onMouseLeave={() => setHover(null)}
            >
                <a
                    href="https://members.staterecords.org/do-not-sell-my-info"
                    style={{
                        ...linkStyles,
                        ...(hover === "donotsellmyinfo" && {
                            textDecoration: "underline",
                        }),
                    }}
                >
                    {"Do Not Sell My Info"}
                </a>
            </p>
            <p style={dashStyles}>|</p>
            <p
                style={paragraphStyles}
                onMouseEnter={() => setHover("termsofuse")}
                onMouseLeave={() => setHover(null)}
            >
                <a
                    href="https://members.staterecords.org/customer/terms"
                    style={{
                        ...linkStyles,
                        ...(hover === "termsofuse" && {
                            textDecoration: "underline",
                        }),
                    }}
                >
                    {"Terms of Use"}
                </a>
            </p>
        </div>
    )
}

export default ContactsList
