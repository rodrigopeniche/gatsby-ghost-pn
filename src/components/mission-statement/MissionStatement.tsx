import * as React from "react"
import MissionStatementContainer from "./MissionStatementContainer"
import TextArea from "./TextArea"
import Inputs from "./Inputs"
import SearchButton from "./Button"

const MissionStatement = () => {
    return (
        <MissionStatementContainer>
            <TextArea />
            <Inputs />
            <SearchButton />
        </MissionStatementContainer>
    )
}

export default MissionStatement
