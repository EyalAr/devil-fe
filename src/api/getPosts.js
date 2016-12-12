export default ({ page, sort }) => {
  return new Promise(resolve => {
    setTimeout(() => resolve({
      time: Date.now(),
      page: page,
      loaded: ["1", "2", "3"],
      entities: {
        posts: {
          "1": {
            id: "1",
            user: "2",
            title: "JS vs Assembler in real world applications"
          },
          "2": {
            id: "2",
            user: "3",
            title: "Running ES6 on IE3"
          },
          "3": {
            id: "3",
            user: "1",
            title: "Running JS on my microwave"
          }
        },
        users: {
          "1": {
            id: "1",
            username: "bob123"
          },
          "2": {
            id: "2",
            username: "alice_cooper_2nd"
          },
          "3": {
            id: "3",
            username: "money_monkey"
          }
        }
      }
    }), 1000)
  })
}
