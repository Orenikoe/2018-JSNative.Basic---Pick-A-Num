let logBook = [];
let logCase;



function userPickNum(input){
    logCase = input;
    logBook.push(logCase);
    let startAgain;
    if(isNaN(input)){
        alert('invalid number');
        startAgain = true
    } else if (input % 3 === 0 || input % 7 === 0){
        alert('you picked good number');
        startAgain = false
    } else if(input % 3 !== 0 || input % 7 !== 0) {
        alert('try again');
        startAgain = true
    }
    
    if(startAgain){
        userPickNum(prompt('pick a number which can be divide in 3 or 7')) ; 
    
    }
    
      console.log(logBook);

 
}




userPickNum(prompt('pick a number which can be divide in 3 or 7'));






