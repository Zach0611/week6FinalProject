// Define the Card class
class Card {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }
    getValue() {
      if (this.rank === 'A') {
        return 14;
      } else if (this.rank === 'K') {
        return 13;
      } else if (this.rank === 'Q') {
        return 12;
      } else if (this.rank === 'J') {
        return 11;
      } else {
        return parseInt(this.rank);
      }
    }
  }
  
  // Define the Deck class
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      for (let suit of suits) {
        for (let rank of ranks) {
          this.cards.push(new Card(suit, rank));
        }
      }
      this.shuffle();
    }
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
    deal() {
      return this.cards.pop();
    }
  }
  
  // Define the Player class
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.points = 0;
    }
    addCard(card) {
      this.hand.push(card);
    }
    playCard() {
      return this.hand.pop();
    }
    addPoints(points) {
      this.points += points;
    }
  }
  
  // Define the Game class
  class Game {
    constructor(player1, player2) {
      this.player1 = new Player(player1);
      this.player2 = new Player(player2);
      this.deck = new Deck();
      this.dealCards();
    }
    dealCards() {
      while (this.deck.cards.length > 0) {
        this.player1.addCard(this.deck.deal());
        this.player2.addCard(this.deck.deal());
      }
    }
    playRound() {
      const card1 = this.player1.playCard();
      const card2 = this.player2.playCard();
      const value1 = card1.getValue();
      const value2 = card2.getValue();
      if (value1 > value2) {
        this.player1.addPoints(1);
        console.log(`${this.player1.name} gets 1 point`);
      } else if (value2 > value1) {
        this.player2.addPoints(1);
        console.log(`${this.player2.name} gets 1 point`);
      }
    }
    playGame() {
      while (this.player1.hand.length > 0) {
        this.playRound();
      }
      this.displayScore();
    }
    displayScore() {
      const winner = this.player1.points > this.player2.points ? 'Player 1' : 'Player 2';
      const loser = this.player1.points < this.player2.points ? 'Player 1' : 'Player 2';
    
      const output = [
        `${winner} has ${winner === 'Player 1' ? this.player1.points : this.player2.points} points.`,
        `${loser} has ${loser === 'Player 1' ? this.player1.points : this.player2.points} points.`,
        `${winner} wins!`
      ];
    
      console.log(output.join('\n'));
      return output.join('\n');
    }
    
    }
  
  
  // Run the game
  const game = new Game('Player 1', 'Player 2');
game.playGame();
  