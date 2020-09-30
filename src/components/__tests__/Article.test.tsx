import * as React from "react"
import * as renderer from "react-test-renderer"
import Article from "../article/Article"
import { BreakpointProvider } from "../../hooks/useBreakpoints"

describe("Article", () => {
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
