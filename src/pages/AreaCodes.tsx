import * as React from "react"
import { graphql } from "gatsby"
import Frame from "../components/frame/Frame"
import Sidebar from "../components/sidebar/Sidebar"
import Article from "../components/article/Article"
import SearchBox from "../components/search-box/SearchBox"
import { BreakpointProvider } from "../hooks/useBreakpoints"
import MainPageContainer from "../components/MainPageContainer"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import {sub2key, key2state} from "../data/subdomains"
import SEO from "../components/seo"

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
    const state = key2state[stateKey]
    return (
        <>  {!subdomain ? null :
            <SEO
                title={`California Area Codes and Their Locations | California.Phonenumbers.org`}
                keywords={`California area code, california area code location, california area code meaning, california public utility commission, cpuc, area code 209, area code 310, area code 424, area code 323, area code 213, area code 510, area code 341, area code 408, area code 669, area code 415, area code 628, area code 530, area code 559, area code 562, area code 619, area code 858, area code 626, area code 650, area code 661, area code 714, area code 657, area code 707, area code 760, area code 442, area code 805, area code 820, area code 818, area code 820, area code 818, area code 747, area code 831, area code 840, area code 909, area code 916, area code 279, area code 925, area code 949, area code 951`}
                description={`Because of the large number of phone subscribers in California, area codes were introduced to allow for unique numbers of up to nine numbers. Area codes can tell you a lot about a phone number, and the subscriber behind it. Learn more here.`}
                path={'/AreaCodes'}
                ArticleData={{title: "California Area Codes and Their Locations"}}
            />
            }
            <BreakpointProvider queries={queries}>
                <Frame>
                    <MainPageContainer>
                        <Header stateKey={stateKey}/>
                        <SearchBox />
                        { !subdomain ? null :
                            <Article data={articles[subdomain]["area-codes"]} />
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
