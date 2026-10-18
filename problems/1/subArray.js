let str = "vivek";
let allSubstr = [];

for (let i = 0; i < str.length; i++) {
  let subStr = "";
  for (let j = i; j < str.length; j++) {
    subStr = subStr + str[j];
    allSubstr.push(subStr);
  }
}

console.log(allSubstr);
