export class Game{
  constructor(answer){
    this.answer = answer;
    this.answerHidden = answer.replace(/./g, '_ ').trim();
    this.guessWrong = [];
  }

  checkAddGuess(guess){
    if (this.answer.includes(guess)){
      let answerArray = this.answer.split("");
      let answerHiddenArray = [];
      for(let i=0; i < answerArray.length; i++){
        if (answerArray[i] === guess){
          answerHiddenArray.push(guess);
        } else {
          answerHiddenArray.push("_");
        }
      }
      this.answerHidden = answerHiddenArray.join(" ");
    } else {
      //this.guessWrong.push(guess)
    }
  }
}