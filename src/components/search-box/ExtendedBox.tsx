import * as React from "react"
import ExtendedContainer from "./extended/ExtendedContainer"
import Label from "./extended/Label"
import KnownScams from "./extended/KnownScams"
import Results from "./extended/Results"
import AreaCode from "./extended/AreaCode"
import PrefixCode from "./extended/PrefixCode"
import Warning from "./extended/Warning"
import ProceedButton from "./extended/ProceedButton"
import Underlined from "./extended/Underlined"

const SearchBoxExtended = ({ expanded }: { expanded: boolean }) => {
    if (!expanded) return null
    return (
        <ExtendedContainer>
            <Underlined>
                <Label />
                <AreaCode />
                <PrefixCode />
                <KnownScams />
            </Underlined>
            <Results />
            <Warning />
            <ProceedButton />
        </ExtendedContainer>
    )
}

export default SearchBoxExtended
