import * as React from "react"
import CollapsedBox from "./CollapsedBox"
import ExtendedBox from "./ExtendedBox"

const Container = ({ children }: { children: React.ReactNode[] }) => {
    const containerStyles = {
        minWidth: "200px",
        gridArea: "search-box",
    }

    return <div style={containerStyles}>{children}</div>
}

const SearchBox = () => {
    const [expanded, setExpand] = React.useState(false)
    return (
        <Container>
            <CollapsedBox setExpand={setExpand} />
            <ExtendedBox expanded={expanded} />
        </Container>
    )
}

export default SearchBox
