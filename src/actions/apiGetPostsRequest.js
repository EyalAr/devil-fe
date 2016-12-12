export default (page, sort) => ({
  type: "API.GET_POSTS.REQUEST",
  params: { page, sort }
})
