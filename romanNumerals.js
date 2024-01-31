function toRomanLazy(num) {
  let output = ""
  const romanNumeralToArabic = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }
  const romanNumArr = Object.keys(romanNumeralToArabic).reverse()
  for (let i = 0; i < romanNumArr.length; i++){
    let currentLet = romanNumArr[i]
    let numOfNums = Math.floor(num/romanNumeralToArabic[currentLet])
    if (numOfNums > 0){
     for (let y = 0; y < numOfNums; y++){
      output += romanNumArr[i]
    }
   }
    num -= (numOfNums*romanNumeralToArabic[currentLet])
  }
  return output;
}

function toRoman(num) {
  let output = ""
  const romanNumeralToArabic = {
    'I' : 1,
    'IV': 4,
    'V' : 5,
    'IX': 9,
    'X' : 10,
    'XL': 40,
    'L' : 50,
    'C' : 100,
    'CD': 400,
    'D' : 500,
    'CM': 900,
    'M' : 1000
  }
  const romanNumArr = Object.keys(romanNumeralToArabic).reverse()
  for (let i = 0; i < romanNumArr.length; i++){
    let currentLet = romanNumArr[i]
    let numOfNums = Math.floor(num/romanNumeralToArabic[currentLet])
    if (numOfNums > 0){
     for (let y = 0; y < numOfNums; y++){
      output += romanNumArr[i]
    }
   }
    num -= (numOfNums*romanNumeralToArabic[currentLet])
  }
  return output;
  
}

module.exports = { toRoman, toRomanLazy };
console.log(toRomanLazy(4))
console.log(toRoman(4))
