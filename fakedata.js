var faker = require('faker')
var axios = require('axios')

let data = []

for (let i = 0; i < 100; i++) {
  let type = faker.finance.transactionType()
  let ammount = faker.finance.amount()
  let direction = faker.random.boolean() ? '+' : '-'
  let comment = faker.random.boolean() ? faker.lorem.sentence() : ''
  let date = faker.date.past()

  axios.post("https://vue-finance-e1b3d.firebaseio.com/data.json",{
    type,
    ammount,
    direction,
    comment,
    date
  })
}

// axios.post("https://vue-finance-e1b3d.firebaseio.com/data.json", data)
