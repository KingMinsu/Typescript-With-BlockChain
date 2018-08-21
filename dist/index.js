"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    name: "minsu",
    age: 28,
    gender: "male"
};
const sayHi = (people) => {
    return `Hello ${people.name}, you are ${people.age}, you are a ${people.gender}`;
};
console.log(sayHi(student));
//# sourceMappingURL=index.js.map