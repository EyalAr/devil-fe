export default (title, url) => ({
  type: "API.SUBMIT_POST.REQUEST",
  params: { title, url }
})
