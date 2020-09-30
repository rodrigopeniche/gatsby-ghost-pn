import * as React from "react"
import InputsContainer from "./inputs-section/InputsContainer"
import AreaCode from "./inputs-section/AreaCode"
import Exchange from "./inputs-section/Exchange"
import Dash from "./inputs-section/Dash"
import SubscribeNumber from "./inputs-section/SubscribeNumber"
import Code from "./inputs-section/CountryCode"

const Inputs = () => {
    const [values, setValues]: [
        { [key: string]: string },
        Function
    ] = React.useState({})

    const inputs: { [key: string]: number } = {
        "area-code": 3,
        exchange: 3,
        subscribe: 4,
    }

    const inputValidation = (value: string) =>
        value
            .match(/\d+/g)
            ?.toString()
            ?.replace(/,/g, "")

    const inputHandler = (name: string, value: string) => {
        setValues((values: { [x: string]: any }) => ({
            ...values,
            [name]: inputValidation(value.substr(0, inputs[name])),
        }))

        const rest = value.substr(inputs[name])

        if (rest) {
            const names = Object.keys(inputs)
            const nextInput = names[names.indexOf(name) + 1]
            if (!nextInput) return
            const nextValue = (values[nextInput] || "") + rest
            inputHandler(nextInput, nextValue)
        }
    }

    return (
        <InputsContainer>
            <Code />
            <AreaCode value={values["area-code"]} inputHandler={inputHandler} />
            <Exchange value={values["exchange"]} inputHandler={inputHandler} />
            <Dash />
            <SubscribeNumber
                value={values["subscribe"]}
                inputHandler={inputHandler}
            />
        </InputsContainer>
    )
}

export default Inputs
