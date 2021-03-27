# Fake Nodejs Database

Another "fake" database for Node.js that stores data in local JSON files, for testing and sample applications.

## Usage

Install the package from npm `yarn add fake-nodejs-database`

Create a `Store` instance specifying in which folder to store the data, then create a collections for each object type you want to store:

```js
const { Store } = require("fake-nodejs-database");

const store = new Store("./data");
const apples = store.collection("apples");
const oranges = store.collection("oranges");
```

This will save apples in `./data/apples.json` and oranges in `./data/oranges.json`.

You can then manipulate each collection using the following CRUD operations:

```js
// create a new item; returns a generated id
const id = apples.create({ variety: "Gala", weight: 133 }); // => 'BJ4E9mQOG'

// list all items in a collection
apples.list(); // => [{id: 'BJ4E9mQOG', variety: 'Gala', weight: 133}]

// get a single item
apples.get("BJ4E9mQOG"); // => {id: 'BJ4E9mQOG', variety: 'Gala', weight: 133}

// update an item
apples.update({ id: "BJ4E9mQOG", variety: "Braeburn", weight: 133 });

// delete an item
apples.delete("BJ4E9mQOG");
```

That's it. All operations are synchronous.

Files are read at startup and written after each modification. You can manually edit a JSON file and provide some initial data, as long as you do that before you start the application.

## Usage with TypeScript

If you use this module from TypeScript you can specify an interface representing the type of objects stored in each collection. E.g.

```ts
import { Store } from "fake-nodejs-database";

interface Apple {
    id: string;
    variety: string;
    weight: number;
}

const store = new Store("./data");
const apples = store.collection<Apple>("apples"); // apples: Collection<Apple>
const all = apples.list(); // all: Apple[]
const one = apples.get("BJ4E9mQOG"); // one: Apple
```

## Available commands

```sh
    yarn build
    yarn test
```
