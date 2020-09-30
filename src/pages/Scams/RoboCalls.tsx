import * as React from "react"
import { graphql } from "gatsby"
import Frame from "../../components/frame/Frame"
import Sidebar from "../../components/sidebar/Sidebar"
import Article from "../../components/article/Article"
import SearchBox from "../../components/search-box/SearchBox"
import { BreakpointProvider } from "../../hooks/useBreakpoints"
import MainPageContainer from "../../components/MainPageContainer"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import {sub2key, key2state} from "../../data/subdomains"
import SEO from "../../components/seo"

// takes an array of objects and merges the items into a single object, keyed by a field
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const arrayToObject = (array: [], keyField: string): Record<string, any> =>
    array.reduce((obj, item) => {
        obj[item[keyField]] = item
        return obj
    }, {})

const extractArticles = (data: {
    allStrapiArticle: { edges: { node: any }[] }
}) =>
    data.allStrapiArticle.edges
        .map((edge: { node: any }) => edge.node)
        .reduce(
            (
                accumulator: { [key: string]: any },
                current: {
                    name: string | number
                    sections: any
                    subdomain: string
                }
            ) => {
                if (!(current.subdomain in accumulator)) {
                    accumulator[current.subdomain == null ? 'california' : current.subdomain] = {}
                }
                accumulator[current.subdomain == null ? 'california' : current.subdomain][current.name] = {}
                // get sections, isolate sidebar and remove it form og array
                let sectionsObject = arrayToObject(current.sections, "name")
                if ("sidebar" in sectionsObject && sectionsObject["sidebar"]["content"] != null) {
                    accumulator[current.subdomain == null ? 'california' : current.subdomain][current.name]["sidebar"] =
                        sectionsObject["sidebar"]["content"]
                    for (var i = current.sections.length - 1; i >= 0; --i) {
                        if (current.sections[i].name == "sidebar") {
                            current.sections.splice(i,1);
                        }
                    }
                }
                accumulator[current.subdomain][current.name]["sections"] = current.sections
                return accumulator
            },
            {}
        )

const queries = {
    md: "(max-width: 767px)",
    sm: "(max-width: 600px)",
    xs: "(max-width: 480px)",
    ms: "(max-width: 420px)",
    ss: "(max-width: 320px)",
    amd: "(max-width: 750px)",
    asm: "(max-width: 719px)",
    fmd: "(max-width: 959px)",
    fsm: "(max-width: 539px)",
    wmd: "(max-width: 639px)",
    wsm: "(max-width: 799px)",
    wxs: "(max-width: 960px)",
    wms: "(max-width: 749px)",
}

const IndexPage = ({ data }: { data: any }) => {
    const articles = extractArticles(data)
    const subdomain = process.env.SUBDOMAIN
    const stateKey = sub2key[subdomain]
    return (
        <>  {!subdomain ? null :
                <SEO
                    title={`What is a California Robocall? | California.Phonenumbers.org`}
                    keywords={`California robocall, california robocall scams, california robocall uses, california automated calls, california robocall spam, california consumer call protection act, california caller id, california robocall requirements, stop california robocalls,`}
                    description={`Robocalls refer specifically to calls that are automated, and not necessarily performed by a human. Their goal is to entice the receiver into accepting terms and conditions they do not understand. Learn how to identify robocalls, and how to avoid them, here.`}
                    path={'/Scams/RoboCalls'}
                    ArticleData={{title: "What is a California Robocall?"}}
                />
            }
            <BreakpointProvider queries={queries}>
                <Frame>
                    <MainPageContainer>
                        <Header stateKey={stateKey}/>
                        <SearchBox />
                        { !subdomain ? null :
                            <Article data={articles[subdomain]["scams-robocall"]} />
                        }
                    </MainPageContainer>
                </Frame>
                <Footer />
            </BreakpointProvider>
        </>
    )
}

export const query = graphql`
    {
        allStrapiArticle {
            edges {
                node {
                    name
                    subdomain
                    sections {
                        id
                        name
                        content
                        cells {
                            content
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage
