import * as React from "react"
import SearchbarBackground from "./images/topblock.png"
import { useBreakpoint } from "../../../hooks/useBreakpoints"

const SearchBoxContainer = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    const { md } = useBreakpoint()

    const searchboxContainerStyles: React.CSSProperties = {
        backgroundColor: "#315680",
        maxWidth: "633px",
        marginLeft: "11px",
        marginRight: "18px",
        paddingLeft: "16px",
        paddingRight: "16px",
        boxSizing: "border-box",
        ...(!md && {
            backgroundImage: `url(${SearchbarBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "260px",
        }),
        ...(md && {
            paddingBottom: "25px",
            marginLeft: "5px",
            marginRight: "5px",
        }),
    }
    return <div style={searchboxContainerStyles}>{children}</div>
}

export default SearchBoxContainer
