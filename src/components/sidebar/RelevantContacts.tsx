import * as React from "react"
import { useBreakpoint } from "../../hooks/useBreakpoints"

const linkStyles: React.CSSProperties = {
  fontWeight: "normal",
}

const RelevantContacts = () => {
  const { md } = useBreakpoint()

  const relevantContactsContainerStyles: React.CSSProperties = {
    background: "#F1F1F1",
    marginTop: "-15px",
    marginRight: "11px",
    borderRadius: "0",
    maxWidth: "97%",
    ...(md && {
      borderRadius: "10px",
      marginRight: "0",
      marginTop: "5px",
      maxWidth: "100%",
    }),
  }

  const mainHeaderRCStyles: React.CSSProperties = {
    fontFamily: "Georgia",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "20px",
    paddingLeft: "18px",
    paddingRight: "18px",
    paddingTop: "16.74px",
    color: "#444444",
    ...(md && {
      fontSize: "24px",
      lineHeight: "27px",
      paddingLeft: "18px",
      textAlign: "left",
    }),
  }

  const usaGovParagraphStyles: React.CSSProperties = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#808080",
    paddingLeft: "18px",
    paddingRight: "18px",
    marginTop: "-10px",
    ...(md && {
      fontSize: "17px",
      lineHeight: "20px",
      paddingLeft: "18px",
      textAlign: "left",
    }),
  }

  const numberStyles: React.CSSProperties = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#808080",
    paddingLeft: "18px",
    paddingRight: "18px",
    marginTop: "-23px",
    ...(md && {
      fontSize: "17px",
      lineHeight: "20px",
    }),
  }

  const additionalHeaderRCStyles: React.CSSProperties = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "16px",
    textDecorationLine: "underline",
    color: "#2C5580",
    paddingLeft: "18px",
    paddingRight: "18px",
    marginTop: "-5px",
    ...(md && {
      fontSize: "17px",
      lineHeight: "20px",
      paddingLeft: "18px",
      textAlign: "left",
    }),
  }

  const footerTextStyles: React.CSSProperties = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "10px",
    lineHeight: "11px",
    color: "#808080",
    paddingLeft: "18px",
    paddingRight: "18px",
    paddingBottom: "25px",
    ...(md && {
      fontSize: "14px",
      lineHeight: "22px",
      marginRight: "10px",
    }),
  }

  return (
    <div style={relevantContactsContainerStyles}>
      <h1 style={mainHeaderRCStyles}>Federal Hotline Phones:</h1>

      <p style={usaGovParagraphStyles}>
        The{" "}
        <a href="USA.gov" style={linkStyles}>
          USA.gov
                </a>{" "}
        telephone line:
            </p>
      <p
        style={{
          ...numberStyles,
          ...{ marginTop: "-10px" },
        }}
      >
        +1-844-872-4681
            </p>

      <h1 style={additionalHeaderRCStyles}>
        National Do Not Call Registry
            </h1>
      <p style={numberStyles}>+1-888-382-1222</p>

      <h1 style={additionalHeaderRCStyles}>
        The Federal Trade Comission
            </h1>
      <p style={numberStyles}>+1-888-225-5322</p>

      <p style={footerTextStyles}>
        Lines are available between 8:00 AM and 8:00 PM ET, Monday
        through Friday, except federal holidays.
            </p>
    </div>
  )
}

export default RelevantContacts
