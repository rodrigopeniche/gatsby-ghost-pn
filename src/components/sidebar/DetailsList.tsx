import * as React from "react"
import checked from "./images/checked.png"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const imageStyles: React.CSSProperties = {
    background: `url(${checked})`,
    backgroundRepeat: "no-repeat",
    listStyleType: "none",
    display: "flex",
}

const detailsList: string[] = [
    "Owner's Details",
    "Contact info",
    "Location",
    "Family members",
    "Estimated income",
    "Property ownership",
    "Timezone",
]

const detailsListContainerStyles: React.CSSProperties = {
    paddingTop: "3px",
}

const DetailsList = () => {
    const { md } = useBreakpoint()

    const paragraphStyles: React.CSSProperties = {
        fontFamily: "Arial",
        fontStyle: "normal",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "16px",
        color: "#808080",
        paddingTop: "6px",
        paddingLeft: "21px",
        ...(md && {
            fontSize: "21px",
            paddingLeft: "40px",
        }),
    }

    const detailsContainerStyles: React.CSSProperties = {
        marginTop: "0",
        marginLeft: "-2px",
        ...(!md && {
            marginTop: "-12.5px",
        }),
    }

    const listItems = detailsList.map((item, i) => (
        <div style={detailsContainerStyles} key={i}>
            <li style={imageStyles}>
                <p style={paragraphStyles}>{item}</p>
            </li>
        </div>
    ))

    return <div style={detailsListContainerStyles}>{listItems}</div>
}

export default DetailsList
