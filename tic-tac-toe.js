function Player(id, symbol) {
  this.id = id
  this.symbol = symbol
}

function TicTacToe() {
  
}

TicTacToe.prototype = {
  startGame: function () {
    this.player1 = new Player(1, "🐱")
    this.player2 = new Player(2, "🐶")
    this.turn = this.player1
  },
  
  takeTurn: function (player) {
    // if (this.player1) {
      square.addClass("active")
      button.text("💩")
    // } 
  }
}

$(document).on('ready', function() {
  
  var game = new TicTacToe()
  game.startGame()

  if (game.turn === game.player1) {
    game.turn = game.player2;
  } else {
    game.turn = game.player1;
  }

  var buttons = $('button')
  buttons.on('mousedown', function(event)  {  
    event.preventDefault()
    var button = $(this)

    var squareID = $(this).data('square')
    var square = $('.' + squareID)

  if (game.turn === game.player1) {
    console.log(game.player1)
    square.addClass("active")
    button.text(player1.symbol)
  }
  })
})

// What constitutes a turn?
// determine player turn
// select a space
  // space available?
  // space advantageous?
// claim space using player identifier
// check win/loss/draw state
  // what is a win
  // what is a draw
  // what is a loss
  // communicate outcome
// continue play