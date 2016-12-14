export default (email, name) => ({
  type: "API.REGISTER.REQUEST",
  params: { email, name }
})
