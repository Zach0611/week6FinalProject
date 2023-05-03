const expect = chai.expect;
describe('Game', function() {
    describe('#displayScore()', function() {
      it('should display the correct score', function() {
        // create a test Game object
        const game = new Game();
        // create two mock player objects
        const player1 = { points: 3 };
        const player2 = { points: 2 };
        // set the players in the game
        game.player1 = player1;
        game.player2 = player2;
  
        // capture console output to check against expected value
        let consoleOutput = "";
        const storeLog = inputs => (consoleOutput += inputs + "\n");
        console["log"] = storeLog;
  
        // call the displayScore method
        game.displayScore();
  
        // check that the console output matches the expected value
        const expectedOutput = "Player 1 has 3 points.\nPlayer 2 has 2 points.\nPlayer 1 wins!\n";
        expect(consoleOutput).to.equal(expectedOutput);
      });
    });
  });
  