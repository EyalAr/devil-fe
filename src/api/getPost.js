const titles = {
  "1": "JS vs Assembler in real world applications",
  "2": "Running ES6 on IE3",
  "3": "Running JS on my microwave"
}

const users = {
  "1": "2",
  "2": "3",
  "3": "1"
}

export default ({ id, page, mode, sort }) => {
  return new Promise(resolve => {
    setTimeout(() => resolve({
      time: Date.now(),
      page, id, mode, sort,
      title: titles[id],
      user: users[id],
      loaded: ["1", "2", "3"],
      entities: {
        comments: {
          "1": {
            id: "1",
            user: "1",
            content: "I agree"
          },
          "2": {
            id: "2",
            user: "2",
            content: "I disagree"
          },
          "3": {
            id: "3",
            user: "3",
            content: "Maybe, I don't know"
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
