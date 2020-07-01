import { Game } from "../src/dinoipsum"

describe('', () => {



  test('should create class with answer property and wrong guess property', () => {
    const game = new Game("string");
    expect(game.answer).toBe("string");

  })

})
