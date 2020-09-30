import * as React from "react"
import * as renderer from "react-test-renderer"
import "@testing-library/jest-dom/extend-expect"
import SearchBox from "../search-box/SearchBox"
import { BreakpointProvider } from "../../hooks/useBreakpoints"
import AddBox from "../search-box/collapsed/inputs-section/components/AddBox"
import MainBox from "../search-box/collapsed/inputs-section/components/MainBox"
import ExtendedBox from "../search-box/ExtendedBox"

const queries = {
    md: "(max-width: 767px)",
    sm: "(max-width: 600px)",
    xs: "(max-width: 480px)",
    ms: "(max-width: 420px)",
    ss: "(max-width: 320px)",
}

describe("SearchBox", () => {
    const searchBox = (
        <BreakpointProvider queries={queries}>
            <SearchBox />
        </BreakpointProvider>
    )

    const component = renderer.create(searchBox)

    it("renders correctly", () => {
        const jsonTree = component.toJSON()
        expect(jsonTree).toMatchSnapshot()
    })

    it("have number inputs", () => {
        const addBoxes = component.root.findAllByType(AddBox)
        const mainBoxes = component.root.findAllByType(MainBox)
        expect(addBoxes.length).toBe(2)
        expect(mainBoxes.length).toBe(2)
    })

    it("changes input should expand searchbox", async () => {
        const input = component.root.findAllByType("input").pop()
        const extended = component.root.findByType(ExtendedBox)

        renderer.act(() => {
            input.props.onChange({ target: { value: "test" } })
        })

        expect(extended.props.expanded).toBeTruthy()
    })
})
