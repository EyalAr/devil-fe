import React from "react"
import ReactMarkdown from "react-markdown"
import style from "./style.css"

const Markdown = ({ source }) => (
  <ReactMarkdown source={source} escapeHtml={true} className={style.container}/>
)

Markdown.displayName = "UI/Markdown"

export default Markdown
