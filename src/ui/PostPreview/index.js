import React from "react"
import detectType from "./detectType"
import RENDERERS from "./renderers"

const PostPreview = ({ url, className }) => {
  const Renderer = RENDERERS[detectType(url)]
  return (
    <div className={className}>
      <Renderer url={url}/>
    </div>
  )
}

PostPreview.displayName = "UI/PostPreview"

export default PostPreview
