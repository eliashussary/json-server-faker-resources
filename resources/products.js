const faker = require("faker");

const SEED = process.env.SEED || 1000;

function randomRow() {

  const products = Array.from(Array(faker.random.number(25)).keys()).map(
    randomProduct
  )

  return {
    contactNumber: faker.phone.phoneNumber(),
    address: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      middleName: null,
      street1: null,
      street2: null,
      city: null,
      region: null,
      postalcode: null,
      country: null,
      phone: "null",
      email: null,
      emailAddress: null,
      name: null,
      accountFirstname: null,
      accountLastname: null,
      salesOrg: null
    },
    position: null,
    onlineContactType: faker.random.number(),
    onlineContactTypeDescription: faker.lorem.words(2),
    summerAssociateYear: faker.date.past().getFullYear(),
    userProducts: products,
    roles: faker.company.bsNoun(),
    products: products.map(p=>p.productName).join(', '),
    onepass: faker.random.boolean() ? "Registered" : "Not-Registered",
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    uuid: faker.random.uuid()
  };
}

function randomProduct() {
  const prd = faker.commerce.product();
  return {
    productCode: prd.toUpperCase(),
    productId: faker.random.number(),
    shortDescription: null,
    productStatus: faker.random.number(),
    productDomain: null,
    productRegistrationStatus: faker.random.boolean(),
    productName: prd
  };
}

module.exports = (collection, db) => {
  for (let i = 0; i < SEED; i++) {
    collection.push(randomRow());
  }
};
