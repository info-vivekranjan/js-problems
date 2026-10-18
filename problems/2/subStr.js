const subStr = "Vivek";

for (let i = 0; i < subStr.length; i++) {
  let subString = "";
  for (let j = i; j < subStr.length; j++) {
    subString = subString + subStr[j];
    console.log(subString);
  }
}
