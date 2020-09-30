import * as React from "react"
import CollapsedContainer from "./collapsed/CollapsedContainer"
import HeaderText from "./collapsed/HeaderText"
import Inputs from "./collapsed/Inputs"

const SearchBoxCollapsed = ({ setExpand }: { setExpand: Function }) => {
    return (
        <CollapsedContainer>
            <HeaderText />
            <Inputs setExpand={setExpand} />
        </CollapsedContainer>
    )
}

export default SearchBoxCollapsed
