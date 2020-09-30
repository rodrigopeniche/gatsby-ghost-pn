import * as React from "react"
import Buttons from "./buttons-section/Buttons"
import HeaderContainer from "./HeaderContainer"
import Label from "./Label"
import HeaderImage from "./HeaderImage"

const Header = ({
    missionStatement = false,
    stateKey
}: {
    missionStatement?: boolean
    stateKey: string
}) => (
    <HeaderContainer missionStatement={missionStatement}>
        <Label stateKey={stateKey}/>
        <HeaderImage />
        <Buttons />
    </HeaderContainer>
)

export default Header
