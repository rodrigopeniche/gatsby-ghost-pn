import * as React from "react"
import Underline from "./ExtendedUnderline"

const Underlined = ({ children }: { children: React.ReactNode[] }) => (
    <>
        {children.map((node, i) => (
            <React.Fragment key={i}>
                {node}
                <Underline />
            </React.Fragment>
        ))}
    </>
)

export default Underlined
