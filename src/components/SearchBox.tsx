import * as React from "react"

const SearchBox = (props: SearchProps) => (
    <form data-testid="numbers-form">
        {"+1 ("}
        <input
            // type="number" //cant be number with alpphanumeric characters
            name="areaCode"
            size={4}
            defaultValue={props.areaCode}
        />
        {")"}
        <input
            // type="number"
            name="exchange"
            size={4}
            defaultValue={props.exchange}
        />
        <input
            // type="number"
            name="subscriber1"
            size={2}
            defaultValue={props.subscriber1}
        />
        {"--"}
        <input
            // type="number"
            name="subscriber2"
            size={2}
            defaultValue={props.subscriber2}
        />
    </form>
)

interface SearchProps {
    areaCode?: string | number
    exchange?: string | number
    subscriber1?: string | number
    subscriber2?: string | number
}

SearchBox.defaultProps = {
    areaCode: "XXX",
    exchange: "XXX",
    subscriber1: "XX",
    subscriber2: "XX",
}

export default SearchBox
