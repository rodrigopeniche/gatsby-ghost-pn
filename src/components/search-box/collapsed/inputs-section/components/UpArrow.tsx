import * as React from "react"

const UpArrow = ({ blockClickHandler }: { blockClickHandler(): void }) => {
    const [hover, setHover] = React.useState(false)
    const [active, setActive] = React.useState(false)
    let timer: number = null

    React.useEffect(() => {
        if (active)
            timer = (setTimeout(() => {
                setActive(false)
            }, 100) as unknown) as number
        return () => clearTimeout(timer)
    })

    const clickHandler = () => {
        blockClickHandler()
        setActive(true)
    }

    const upArrowStyles: React.CSSProperties = {
        position: "absolute",
        bottom: "19.5px",
        right: "25%",
        width: "0px",
        height: "0px",
        borderLeft: "3px solid transparent",
        borderRight: "3px solid transparent",
        borderBottom: "6px solid black",
    }

    const arrowWrapperStyles: React.CSSProperties = {
        width: "100%",
        height: "50%",
        opacity: 0.3,
        ...(!active &&
            hover && {
                opacity: 0.8,
            }),
    }

    return (
        <div
            style={arrowWrapperStyles}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={clickHandler}
        >
            <div style={upArrowStyles} />
        </div>
    )
}

export default UpArrow
