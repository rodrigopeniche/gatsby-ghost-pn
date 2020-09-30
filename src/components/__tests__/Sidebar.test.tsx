import * as React from "react"
import Sidebar from "../sidebar/Sidebar"
import * as renderer from "react-test-renderer"
import { BreakpointProvider } from "../../hooks/useBreakpoints"

describe("sidebar", () => {
    it("renders correctly", () => {
        const tree = renderer.create(
            <BreakpointProvider queries={{}}>
                <Sidebar />
            </BreakpointProvider>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
