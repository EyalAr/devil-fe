const users = {
  "1": {
    id: "1",
    username: "bob123",
    posts: ["3"]
  },
  "2": {
    id: "2",
    username: "alice_cooper_2nd",
    posts: ["1"]
  },
  "3": {
    id: "3",
    username: "money_monkey",
    posts: ["2"]
  }
}

export default ({ id, page, sort }) => {
  return new Promise(resolve => {
    setTimeout(() => resolve({
      time: Date.now(),
      page, id, sort,
      username: users[id].username,
      posts: users[id].posts,
      entities: {
        posts: {
          "1": {
            id: "1",
            title: "JS vs Assembler in real world applications"
          },
          "2": {
            id: "2",
            title: "Running ES6 on IE3"
          },
          "3": {
            id: "3",
            title: "Running JS on my microwave"
          }
        }
      }
    }), 1000)
  })
}
