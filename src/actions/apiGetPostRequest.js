export default (id, page, mode, sort) => ({
  type: "API.GET_POST.REQUEST",
  params: { id, page, mode, sort }
})
