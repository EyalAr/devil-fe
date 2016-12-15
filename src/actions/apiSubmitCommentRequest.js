export default (id, text) => ({
  type: "API.SUBMIT_COMMENT.REQUEST",
  params: { id, text }
})
