import * as React from "react"
import Footer from "../footer/Footer"
import * as renderer from "react-test-renderer"
import { BreakpointProvider } from "../../hooks/useBreakpoints"

describe("footer", () => {
    it("renders correctly", () => {
        const tree = renderer.create(
            <BreakpointProvider queries={{}}>
                <Footer />
            </BreakpointProvider>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
