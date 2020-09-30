import * as React from "react"
import areaCode from "./images/area-code.png"
import CodeBlockContainer from "./code-block/CodeBlockContainer"
import CodeBlockText from "./code-block/CodeBlockText"
import MapBlockSection from "./code-block/MapBlockSection"

const AreaCode = () => (
    <CodeBlockContainer>
        <CodeBlockText title="Area Code">
            The area code is the first three digits that are typed in a phone
            number.They represent a geographical area within a state where those
            numbers originate.Because of high area densities, like Houston or
            Dallas, some areas may share two or three area codes.
        </CodeBlockText>
        <MapBlockSection img={areaCode}>
            area code <strong>202</strong> and area code <strong>353</strong>{" "}
            originate from here
        </MapBlockSection>
    </CodeBlockContainer>
)

export default AreaCode
