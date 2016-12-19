import React from "react"
import detectType from "./detectType"
import RENDERERS from "./renderers"

const Preview = ({ url, className }) => {
  const Renderer = RENDERERS[detectType(url)]
  return (
    <div className={className}>
      <Renderer url={url}/>
    </div>
  )
}

Preview.displayName = "UI/lib/Preview"

export default Preview
