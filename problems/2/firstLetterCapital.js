const str = "You are the problem, cure yourself if you want to cure world";

function firstLetterCapital(str = "") {
  const strArr = str.split(" ");

  let resultStr = "";

  for (let i = 0; i < strArr.length; i++) {
    const firstLetter = strArr[i][0].toUpperCase();

    const restLetter = strArr[i].slice(1, strArr[i].length);

    resultStr = resultStr + firstLetter + restLetter + " ";
  }
  return resultStr.trim();
}
console.log(firstLetterCapital(str));
