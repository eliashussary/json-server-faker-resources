const faker = require("faker");

const SEED = process.env.SEED || 1000;

function randomRow(){
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email()
    }
}
module.exports = (collection, db) => {
  for (let i = 0; i < SEED; i++) {
    collection.push(randomRow());
  }
};
