const users = [
  { name: "A", department: "IT" },
  { name: "B", department: "HR" },
  { name: "C", department: "IT" },
  { name: "D", department: "Finance" },
  { name: "E", department: "HR" },
];

let obj = {};

for (let i = 0; i < users.length; i++) {
  if (obj[users[i]["department"]]) {
    obj[users[i]["department"]] = [...obj[users[i]["department"]], users[i]];
  } else {
    obj[users[i]["department"]] = [users[i]];
  }
}

console.log(obj);
