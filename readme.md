# json-server-faker

## Summary
Quickly start a `json-server` with mock data using `faker` and minimal configuration

## Start
```
git clone https://github.com/eliashussary/json-server-faker-resources.git
yarn 
yarn start
```

## Adding a resource
1. Go to `./resource`
2. Create a `.js` file for your new resource, ex: `[yourFileName].js`
   1. Note: this will live at `http://localhost:3000/[yourFileName]`
3. Within `[yourFileName].js` export a function which will generate data and push it into your collection

```js
const faker = require('faker')

module.exports = (collection, database) => {
    for(let i = 0; i < 1000; i++){
        collection.push(faker.lorem.lines(1))
    }
}
```

## Saving and Using a Snapshot
1. When `json-server` is bootstrapped, you can save a snapshot by pressing the `S+Enter` keys.
2. Start with a `snapshot` with the following command;
```sh
yarn json-server ./db-snapshotName.json
```

## Tools
Built with;
- https://github.com/typicode/json-server
- https://github.com/marak/Faker.js/