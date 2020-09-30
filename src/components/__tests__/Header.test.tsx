import * as React from "react"
import * as renderer from "react-test-renderer"
import Header from "../header/Header"
import { BreakpointProvider } from "../../hooks/useBreakpoints"

describe("Article", () => {
    it("renders correctly", () => {
        const tree = renderer.create(
            <BreakpointProvider queries={{}}>
                <Header />
            </BreakpointProvider>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
