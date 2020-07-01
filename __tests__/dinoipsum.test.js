import { Game } from "../src/dinoipsum"

describe('', () => {
  let reusableGame;

  beforeEach(() => {
    reusableGame = new Game("string");
  })


  test('should create class with answer property and wrong guess property', () => {
    expect(reusableGame.answer).toBe("string");
  })

  test('created class should have a property of hidden answer that converts string values to underscores', () => {
    expect(reusableGame.answerHidden).toBe("_ _ _ _ _ _");
  })

  test('If guess exists in answer update answerHidden so that underscore at that hidden letter reveals the hidden letter', () => {
    reusableGame.checkAddGuess("r");
    expect(reusableGame.answerHidden).toBe("_ _ r _ _ _");
  })

  test('If guess does not exist in answer, add guess to guessWrong array', () => {
    reusableGame.checkAddGuess("x");
    expect(reusableGame.guessWrong).toBe(["x"]);
  })

})
