// console.log(8);
var element = document.getElementById("y");
element.onkeyup = function(e){
    if(e.keyCode == 13){
    //    console.log('you hit enter')
       var  potato = document.getElementById("y").value;
       displayResult(potato);
    }
}



function displayResult(test) {
    console.log('displayResult called on', test)
    if(palindrome(test)){
        // console.log('it is a palindrome!')
        document.getElementById('answer').innerHTML ="<h2 id='rightAnswer'> You Smart O'Whateva!</h2>"
    } else {
        // console.log("that's not a palindorm you dumbass")
        document.getElementById('answer').innerHTML ="<h2 id='wrongAnswer'> You Can Do Better O'Whateva.</h2>"
    }
}



function palindrome(str) {
    var regex = /[a-zA-Z0-9]/gi;
    var lettersBoi = str.match(regex);
    if(lettersBoi == null){
        // console.log('no letters')
        return true;
    }
    for(var i = 0; i < lettersBoi.length; i++){
        lettersBoi[i] = lettersBoi[i].toLowerCase();
    }


    var lenghtOfHalfTheWord = Math.floor(lettersBoi.length / 2)
    // console.log('length of half the word:', lenghtOfHalfTheWord)
      for (var j = 0; j < lenghtOfHalfTheWord; j++)
      {
        var leftTest = lettersBoi[j];
        var rightTest = lettersBoi[(lettersBoi.length - j -1)]
        // console.log(rightTest, leftTest);
        if (leftTest != rightTest){
          return false
        } 
      }
      return true
    
    }
    palindrome("0_0 (: /-\ :) 0-0"); 
    


//     // console.log(lettersOnly)
//     var reversedArray = [...letters].reverse();
//     console.log(reversedArray);
//     for(var i = 0; i < letters.length; i++){
//       if(letters[i] == reversedArray[i] ){
    
//       } else{
//         return false
//       }
//     }
//     return true
//    }
    
    
    
//    palindrome("0_0 (: /-\ :) 0-0");
   