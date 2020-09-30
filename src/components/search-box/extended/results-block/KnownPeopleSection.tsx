import * as React from "react"
import handset from "./images/handset.png"
import sprint from "./images/sprint.png"
import verizon from "./images/verizon.png"
import KnownPeopleItem from "./KnownPeopleItem"

const knownPeopleInfo = [
    {
        handset: handset,
        persoName: "P********* J*******",
        mainTextStr1:
            "Last use of (xxx) xxx-xxxx in Dec, 2019. Subscriber in use was Verizon.",
        mainTextStr2:
            "Registration: 1600 Pennsylvania Ave NW, Washington, DC 20500, US",
        footerText:
            "During this time, this number was reported as a scam x times",
        logo: verizon,
    },
    {
        handset: handset,
        persoName: "G*** O*******",
        mainTextStr1:
            "Last use of (xxx) xxx-xxxx in Dec, 2019. Subscriber in use was Verizon.",
        mainTextStr2:
            "Registration: 1600 Pennsylvania Ave NW, Washington, DC 20500, US",
        footerText:
            "During this time, this number was reported as a scam x times",
        logo: sprint,
    },
    {
        handset: handset,
        persoName: "S*********** A*******",
        mainTextStr1:
            "Last use of (xxx) xxx-xxxx in Dec, 2019. Subscriber in use was Verizon.",
        mainTextStr2:
            "Registration: 1600 Pennsylvania Ave NW, Washington, DC 20500, US",
        footerText:
            "During this time, this number was reported as a scam x times",
        logo: verizon,
    },
]

const KnownPeopleSection = () => {
    return (
        <div>
            {knownPeopleInfo.map((item, i) => (
                <KnownPeopleItem key={i} {...item} />
            ))}
        </div>
    )
}

export default KnownPeopleSection
