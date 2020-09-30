import * as React from "react"
import Article from "./Article"
import Details from "./Details"
import Description from "./Description"
import Preview from "./Preview"
import RelevantContacts from "./RelevantContacts"
import SidebarContainer from "./SidebarContainer"
import DetailsList from "./DetailsList"

const Sidebar = ({ text }: { text: string }) => {
    return (
        <SidebarContainer>
            <Article />
            <Details>
                <DetailsList />
            </Details>
            <Description text={text} />
            <Preview />
            <RelevantContacts />
        </SidebarContainer>
    )
}

export default Sidebar
