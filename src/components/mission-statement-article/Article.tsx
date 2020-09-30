import * as React from "react"
import "./article-body.css"
import "./special.css"
import * as ReactMarkdown from "react-markdown"
import ArticleContainer from "./ArticleContainer"

const Article = ({ data }: { data: any }) => {
    return (
        <ArticleContainer>
            {data.map(
                (
                    {
                        name,
                        content,
                        cells,
                    }: {
                        name: string
                        content: string | null
                        cells: { content: string }[] | null
                    },
                    i: string | number
                ) => (
                    <React.Fragment key={i}>
                        {content && (
                            <ReactMarkdown
                                className={name}
                                source={content}
                                escapeHtml={false}
                            />
                        )}
                        {cells && (
                            <div className={name}>
                                {cells.map(({ content }, i) => (
                                    <ReactMarkdown
                                        key={i}
                                        className={"cell-" + i}
                                        source={content}
                                        escapeHtml={false}
                                    />
                                ))}
                            </div>
                        )}
                    </React.Fragment>
                )
            )}
        </ArticleContainer>
    )
}

export default Article
