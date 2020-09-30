import * as React from "react"
import { useBreakpoint } from "../../../hooks/useBreakpoints"
import ButtonContainer from "./ButtonContainer"
import Button from "./Button"

const Buttons = () => {
    const { md } = useBreakpoint()
    return (
        <ButtonContainer>
            <Button
                text="Login"
                href="http://members.staterecords.org/customer/login"
                first
            />
            {md && (
                <Button
                    text="Help"
                    href="http://members.staterecords.org/customer/help"
                />
            )}
            <Button
                text="Contact us"
                href="http://members.staterecords.org/customer/help"
                last
            />
        </ButtonContainer>
    )
}

export default Buttons
