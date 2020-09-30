import * as React from "react"
import Main from "./Main"
import Wrapper from "./Wrapper"
import Content from "./Content"

const Frame = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) => {
    return (
        <Main>
            <Wrapper>
                <Content>{children}</Content>
            </Wrapper>
        </Main>
    )
}

export default Frame
