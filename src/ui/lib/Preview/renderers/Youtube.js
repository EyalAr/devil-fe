import React from "react"
import PreviewUnavailable from "./PreviewUnavailable"
import style from "./style.css"

const REGEXPS = [
  /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=(.+)(?:\?.*)?$/,
  /^https?:\/\/(?:www\.)?youtu\.be\/(.+)(?:\?.*)?$/
]

const getVideoId = url => {
  for (let i = 0 ; i < REGEXPS.length ; i++) {
    const re = REGEXPS[i]
    var m = url.match(re)
    if (m) return m[1]
  }
  return false
}

export default ({ url }) => {
  const vidId = getVideoId(url)
  if (!vidId) return (<PreviewUnavailable/>)
  return (
    <iframe
      className={style.renderer} 
      src={`https://www.youtube.com/embed/${vidId}`}
      frameBorder="0"
      allowFullScreen>
    </iframe>
)}
