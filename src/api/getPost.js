export default params => {
  const { id, page, mode, sort } = params
  return new Promise(resolve => {
    setTimeout(() => resolve({
      // data
    }), 2000)
  })
}
