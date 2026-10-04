const str = "You are the problem, cure yourself if you want to cure world";

function firstLetterCapital(str = "") {
  let strArr = str.split(" ");
  let result = "";
  for (let i = 0; i < strArr.length; i++) {
    let firstLetter = strArr[i][0].toUpperCase();
    let restLetter = strArr[i].slice(1, strArr[i].length);

    result = result + firstLetter + restLetter + " ";
  }

  return result.trim();
}
console.log(firstLetterCapital(str));
