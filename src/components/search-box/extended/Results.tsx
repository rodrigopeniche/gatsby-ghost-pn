import * as React from "react"
import ResultsContainer from "./results-block/ResultsContainer"
import ResultsText from "./results-block/ResultsText"
import KnownPeopleSection from "./results-block/KnownPeopleSection"

const Results = () => (
    <ResultsContainer>
        <ResultsText />
        <KnownPeopleSection />
    </ResultsContainer>
)

export default Results
