var accountObj = {
  name: "Baude",
  number: 1000,
  members: ["Tea, Apple"],
  location: "ShangHai"
};
var accountStr = JSON.stringify(accountObj);
console.log(accountStr);
var accountStr = '{"name":"Baude", "members":["Google","Yahoo"],\
    "numbers":11111, "location":"A galaxy far, far a way"}';
var accountObj = JSON.parse(accountStr);
console.log(accountObj.name);
console.log(accountObj.members);
