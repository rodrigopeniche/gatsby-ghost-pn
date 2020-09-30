import * as React from "react"
import * as renderer from "react-test-renderer"
import Frame from "../frame/Frame"
import { BreakpointProvider } from "../../hooks/useBreakpoints"

describe("Frame", () => {
    it("renders correctly", () => {
        const Children = () => <div>children</div>
        const tree = renderer.create(
            <BreakpointProvider queries={{}}>
                <Frame>
                    <Children />
                </Frame>
            </BreakpointProvider>
        )
        expect(tree.toJSON()).toMatchSnapshot()
        expect(tree.root.findByProps({ children: "children" })).toEqual(
            expect.anything()
        )
    })
})
