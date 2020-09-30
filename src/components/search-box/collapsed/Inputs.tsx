import * as React from "react"
import InputsContainer from "./inputs-section/InputsContainer"
import AreaCode from "./inputs-section/AreaCode"
import Exchange from "./inputs-section/Exchange"
import Dash from "./inputs-section/Dash"
import SubscribeNumber from "./inputs-section/SubscribeNumber"
import CountryCode from "./inputs-section/CountryCode"

const Inputs = ({ setExpand }: { setExpand: Function }) => {
    const [values, setValues]: [
        { [key: string]: string },
        Function
    ] = React.useState({})

    const inputs: { [key: string]: number } = {
        "area-code": 3,
        exchange: 3,
        subscriber1: 2,
        subscriber2: 2,
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
        setExpand(true)

        const rest = value.substr(inputs[name])

        if (rest) {
            const names = Object.keys(inputs)
            const nextInput = names[names.indexOf(name) + 1]
            if (!nextInput) return
            const nextValue = (values[nextInput] || "") + rest
            inputHandler(nextInput, nextValue)
        }
    }

    const clickHandler = (name: string, key: "up" | "down") => {
        let value: string | number = +values[name]
        if (key === "up") Number.isInteger(value) ? (value += 1) : (value = 0)
        else if (key === "down") value -= 1
        if (isNaN(value) || value < 0) value = ""
        inputHandler(name, value.toString())
    }

    return (
        <InputsContainer>
            <CountryCode />
            <AreaCode
                value={values["area-code"]}
                inputHandler={inputHandler}
                clickHandler={clickHandler}
            />
            <Exchange
                value={values["exchange"]}
                inputHandler={inputHandler}
                clickHandler={clickHandler}
            />
            <Dash />
            <SubscribeNumber
                value1={values["subscriber1"]}
                value2={values["subscriber2"]}
                inputHandler1={inputHandler}
                inputHandler2={inputHandler}
                clickHandler1={clickHandler}
                clickHandler2={clickHandler}
            />
        </InputsContainer>
    )
}

export default Inputs
