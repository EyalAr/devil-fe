export default (id, page, sort) => ({
  type: "API.GET_USER.REQUEST",
  params: { id, page, sort }
})
