import * as React from "react"
import prefixCode from "./images/prefix-code.png"
import CodeBlockContainer from "./code-block/CodeBlockContainer"
import CodeBlockText from "./code-block/CodeBlockText"
import MapBlockSection from "./code-block/MapBlockSection"

const PrefixCode = () => (
    <CodeBlockContainer>
        <CodeBlockText title={"Prefix Code"}>
            The prefix code is a number that relays calls through a central
            office, though this may no longer be the case. Still, central
            offices can help identify the origin of a number or a phone call.
            Note that because phone numbers are exchangeable between mobile
            companies, central office locations are more susceptible to change
            than area codes.
        </CodeBlockText>
        <MapBlockSection img={prefixCode}>
            prefix code for area code
            <strong>{" 202 "}</strong>
            originate from here
        </MapBlockSection>
    </CodeBlockContainer>
)

export default PrefixCode
