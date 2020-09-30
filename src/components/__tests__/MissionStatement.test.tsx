import * as React from "react"
import * as renderer from "react-test-renderer"
import "@testing-library/jest-dom/extend-expect"
import { BreakpointProvider } from "../../hooks/useBreakpoints"
import MissionStatement from "../mission-statement/MissionStatement"
import MainBox from "../mission-statement/inputs-section/components/MainBox"

const queries = {
    md: "(max-width: 767px)",
    sm: "(max-width: 600px)",
    xs: "(max-width: 480px)",
    ms: "(max-width: 420px)",
    ss: "(max-width: 320px)",
}

describe("MissionStatement", () => {
    const searchBox = (
        <BreakpointProvider queries={queries}>
            <MissionStatement />
        </BreakpointProvider>
    )

    const component = renderer.create(searchBox)

    it("renders correctly", () => {
        const jsonTree = component.toJSON()
        expect(jsonTree).toMatchSnapshot()
    })

    it("have number inputs", () => {
        const boxes = component.root.findAllByType(MainBox)
        expect(boxes.length).toBe(3)
    })
})
