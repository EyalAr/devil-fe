export default params => {
  const { page, sort } = params
  return new Promise(resolve => {
    setTimeout(() => resolve({
      time: Date.now(),
      page: page,
      loaded: ["1", "2", "3"],
      entities: {
        posts: {
          "1": {
            title: "JS vs Assembler in real world applications"
          },
          "2": {
            title: "Running ES6 on IE3"
          },
          "3": {
            title: "Running JS on my microwave"
          }
        }
      }
    }), 2000)
  })
}
