/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {sub2key, key2state} from "../data/subdomains"
import phus from "./header/images/phus.png"

function SEO(props: SEOProps) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    const metaDescription = props.description || site.siteMetadata.description
    const keyWords = props.keywords
    let subdomain = process.env.SUBDOMAIN
    let stateKey = sub2key[subdomain]
    let state = key2state[stateKey]

    let schemaData = {
        "@context": "http://www.schema.org",
        "@type": `Organization`,
        "name": site.siteMetadata.title,
        "url": `https://${subdomain}.phonenumbers.org${props.path ? props.path : ''}`,
        "logo": phus,
        "description": metaDescription
    }

    if (props.ArticleData) {
        schemaData['@type'] = 'Article'
        schemaData['headline'] = props.ArticleData.title
        schemaData['name'] = props.ArticleData.title
    }



    return (
        <Helmet
            title={props.title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: keyWords,
                },
                {
                    property: `og:title`,
                    content: props.title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(props.meta)}
        >
            <html lang={props.lang} />
            {<script type="application/ld+json">{JSON.stringify(schemaData)}</script>}
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

interface ArticleData {
    title: string
}

interface SEOProps {
    description?: string
    lang?: string
    meta?: MetaWithProperty[] | MetaWithName[]
    title: string
    path: string
    ArticleData: ArticleData
}

interface MetaWithProperty {
    property: string
    content: string
}

interface MetaWithName {
    name: string
    content: string
}

export default SEO
