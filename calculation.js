// Problem no :1
// Function Explain :  If multiply the input number by 3 the add 10 then divide by 2 then substract by 5 

function mindGame (inputNumber) {

   if(typeof inputNumber === 'number' && inputNumber >0){

      const multliplayer = inputNumber * 3;
    const adder = multliplayer + 10;
    const divider = adder / 2;
    const substractor = divider - 5;
    return substractor;

   }
   else{
    return 'Please enter the valid input'
   }

}


// Problem no :2
// Function Explain : if the input string is even or odd. If it is, return the result.

function evenOdd (inputString) {

    if(typeof  inputString === 'string'){
        
    if (inputString.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
    }
    return 'Please the string value'
}


// Problem no :3
// Function Explain : If substract the input number by 7 and check if the result is less than 7.
function isLGSeven (inputNumber) {

    if(typeof inputNumber === 'number'){
      let difference = inputNumber - 7
      if(difference < 7){
          return difference;
      }
      else{
          return  inputNumber * 2
      }
    }
    return 'Please give the valid input'
  
  }
  
  
  // Problem no :4
  // Function Explain : If find the bad data count in the input array of number. It is return array of number.
  
  function findingBadData (inputArrayOfNum) {
  
      if (!Array.isArray(inputArrayOfNum) || inputArrayOfNum.length === 0) {
          return "Input is not an array, Please provide an array";
      }
  
      let badDataCount = 0;
      for (let i = 0; i < inputArrayOfNum.length; i++) {
          if (inputArrayOfNum[i] < 0) {
              badDataCount++;
          }
      }
      return badDataCount;
  }
  
  
  // Problem no :5
  // Function Explain : If multliply firstFirendsGem if the input is not a number or empty, return alert.
  function gemsToDiamond (firstFirendsGem, secondFriendsGem, thirdFriendsGem) {
  
      if (isNaN(firstFirendsGem) || !firstFirendsGem || isNaN(secondFriendsGem) || !secondFriendsGem || isNaN(thirdFriendsGem) || !thirdFriendsGem) {
          return "Input is not a number, Please provide a number";
      }
      
      const firstGem = firstFirendsGem * 21;
      const secondGem = secondFriendsGem * 32;
      const thirdGem = thirdFriendsGem * 43;
  
      const total = firstGem + secondGem + thirdGem;
  
      if (total >= 1000 * 2) {
          return total - 2000;
      } else {
          return total;
      }
      
  }