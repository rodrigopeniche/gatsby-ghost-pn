import * as React from "react"
import * as renderer from "react-test-renderer"
import { BreakpointProvider } from "../../hooks/useBreakpoints"
import Article from "../mission-statement-article/Article"

describe("Mission statement article", () => {
    it("renders correctly", () => {
        const children = [{ name: "children", content: "<div>children</div>" }]
        const tree = renderer.create(
            <BreakpointProvider queries={{}}>
                <Article data={children} />
            </BreakpointProvider>
        )
        expect(tree.toJSON()).toMatchSnapshot()
        expect(tree.root.findByType("span").props).toEqual({
            dangerouslySetInnerHTML: { __html: "<div>children</div>" },
        })
    })
})
