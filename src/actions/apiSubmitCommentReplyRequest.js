export default (postId, commentId, text) => ({
  type: "API.SUBMIT_COMMENT_REPLY.REQUEST",
  params: { postId, commentId, text }
})
