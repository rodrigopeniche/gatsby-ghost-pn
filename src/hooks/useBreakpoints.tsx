import * as React from "react"
import { useState, useEffect, createContext, useContext } from "react"

const defaultValue = {}

const BreakpointContext = createContext(defaultValue)

const BreakpointProvider = ({
    children,
    queries,
}: {
    children: React.ReactNode | React.ReactNode[]
    queries: { [key: string]: string }
}) => {
    const [queryMatch, setQueryMatch] = useState({})

    useEffect(() => {
        const mediaQueryLists: { [key: string]: any } = {}
        const keys = Object.keys(queries)
        let isAttached = false

        const handleQueryListener = () => {
            const updatedMatches = keys.reduce(
                (acc: { [key: string]: any }, media) => {
                    acc[media] = !!(
                        mediaQueryLists[media] && mediaQueryLists[media].matches
                    )
                    return acc
                },
                {}
            )
            setQueryMatch(updatedMatches)
        }

        if (window && window.matchMedia) {
            const matches: { [key: string]: any } = {}
            keys.forEach(media => {
                if (typeof queries[media] === "string") {
                    mediaQueryLists[media] = window.matchMedia(queries[media])
                    matches[media] = mediaQueryLists[media].matches
                } else {
                    matches[media] = false
                }
            })
            setQueryMatch(matches)
            isAttached = true
            keys.forEach(media => {
                if (typeof queries[media] === "string") {
                    mediaQueryLists[media].addListener(handleQueryListener)
                }
            })
        }

        return () => {
            if (isAttached) {
                keys.forEach(media => {
                    if (typeof queries[media] === "string") {
                        mediaQueryLists[media].removeListener(
                            handleQueryListener
                        )
                    }
                })
            }
        }
    }, [queries])

    return (
        <BreakpointContext.Provider value={queryMatch}>
            {children}
        </BreakpointContext.Provider>
    )
}

function useBreakpoint(): { [key: string]: boolean } {
    const context = useContext(BreakpointContext)
    if (context === defaultValue) {
        throw new Error("useBreakpoint must be used within BreakpointProvider")
    }
    return context
}
export { useBreakpoint, BreakpointProvider }
