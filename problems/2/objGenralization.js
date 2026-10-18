const users = [
  { name: "A", department: "IT" },
  { name: "B", department: "HR" },
  { name: "C", department: "IT" },
  { name: "D", department: "Finance" },
  { name: "E", department: "HR" },
];

let userObj = {};

for (let i = 0; i < users.length; i++) {
  if (userObj[users[i].department]) {
    userObj[users[i].department] = [...userObj[users[i].department], users[i]];
  } else {
    userObj[users[i].department] = [users[i]];
  }
}

console.log(userObj);
