const { Store } = require("easy-json-db");

// start with an empty [data] directory or you can populate it manually
const store = new Store("./data");

// name your collection
const cars = store.collection("cars");

// Add any fields you need, no schema or ID needed. They will be auto generated
cars.create({
    make: "Fiat",
    color: "white",
    year: 2020,
});

cars.create({
    make: "Mercedes",
    color: "blue",
    year: 2019,
});

console.log(cars.list());
//  [
//     { id: 'rwRKDmdo5', make: 'Fiat', color: 'white', year: 2020 },
//     { id: 'sJk5CJ30bT', make: 'Mercedes', color: 'blue', year: 2019 }
//  ]

console.log(cars.get("sJk5CJ30bT")); // { id: 'sJk5CJ30bT', make: 'Mercedes', color: 'blue', year: 2019 }
