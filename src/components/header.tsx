import * as React from "react"
import { Link } from "gatsby"

const Header = (props: HeaderProps) => (
    <header
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {props.siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

interface HeaderProps {
    siteTitle?: string
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
