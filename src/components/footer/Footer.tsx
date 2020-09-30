import * as React from "react"
import FooterContainer from "./FooterContainer"
import WebsiteAdress from "./WebsiteAdress"
import ContactsList from "./ContactsList"

const Footer = () => {
    return (
        <FooterContainer>
            <WebsiteAdress />
            <ContactsList />
        </FooterContainer>
    )
}

export default Footer
