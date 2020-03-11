let  words = [ "макака", "программа","оладушек","прекрасный"
    ];  
    let word = words[Math.floor(Math.random() * words.length)];
    let answerArray = [];
        for (var i = 0; i < word.length; i++)	{ 
            answerArray[i] = "_";
    }
    let remainingLetters = word.length;
        while (remainingLetters > 0) {
         alert(answerArray.join(" "));
     let guess = promt("Угадайте букву или нажмите Отмена для віхода из игры.");
      if (guess === null) {
        break;
    } 
      else if  (guess.length !== 1) {
        alert ("Пажалуйста, введите одиночную букву."); } else {
          for (var j = 0; j < word.length; 
          j++) { if(word[j] === guess) {
              answerArray[j] = guess;
            remainingLetters--;
          }   }
        }
      }
      alert("Отлично! Біло загадано слово " + word);
