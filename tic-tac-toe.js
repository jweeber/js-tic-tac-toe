function Player(id, symbol) {
  this.id = id
  this.symbol = symbol
}

function TicTacToe() {
  this.gameOver = false

  this.moves = {
    "a": null,
    "b": null,
    "c": null,
    "d": null,
    "e": null,
    "f": null,
    "g": null,
    "h": null,
    "i": null
  }

  this.startGame = function () {
    this.player1 = new Player(1, "🐱")
    this.player2 = new Player(2, "🐶")
    this.turn = this.player1
    $('.player-turn').text(this.player1.symbol)

  }

  this.play = function (button, square) {

    if ((this.gameOver !== false) || (button.text() !== '')) { return }
    // if (button.text() !== '') { return }

    if (this.turn === this.player1) {
      $('.player-turn').text(this.player2.symbol)
      button.text(this.player1.symbol)
      this.moves[button.data('square')] = this.player1
      this.turn = this.player2
    } else {
      button.text((this.player2.symbol))
      this.moves[button.data('square')] = this.player2
      this.turn = this.player1
      $('.player-turn').text(this.player1.symbol)
    }

    if (this.winner(this.player1)) {
      theWinner = this.player1.symbol
      this.gameOver = true
      $('.message').text(theWinner + ' wins!')
    } else if (this.winner(this.player2)) {
      theWinner = this.player2.symbol
      this.gameOver = true
     $('.message').text(theWinner + ' wins!')
    } else if (this.isDraw() === true) {
      // theWinner = "draw"
      this.gameOver = true
      $('.message').text("It's a draw!")
    }

  }

  this.resetGame = function () {
    $("table").find('button').each(function () {
      $(this).text("")
    })
    $('.message').text("")
  } 
}

TicTacToe.prototype = {

  isDraw: function() {
    var boardMoves = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
    for (var move of boardMoves){
      if (this.moves[move] === null) { return false }
    }
  return true
  },

  winner: function (player) {

    return this.winsRow(player) || this.winsColumn(player) || this.winsDiagonal(player)
  }, 

  winsRow: function (player) {
    return this.allThree(player, this.moves["a"], this.moves["b"], this.moves["c"]) ||
    this.allThree(player, this.moves["d"], this.moves["e"], this.moves["f"]) ||
    this.allThree(player, this.moves["g"], this.moves["h"] ,this.moves["i"])
  },

  winsColumn: function (player) {
    return this.allThree(player, this.moves["a"], this.moves["d"], this.moves["g"]) ||
    this.allThree(player, this.moves["b"], this.moves["e"], this.moves["h"]) ||
    this.allThree(player, this.moves["c"], this.moves["f"], this.moves["i"])
  },

  winsDiagonal: function (player) {
    return this.allThree(player, this.moves["a"], this.moves["e"], this.moves["i"]) ||
    this.allThree(player, this.moves["c"], this.moves["e"], this.moves["g"])
  },

  allThree: function (player, cellOne, cellTwo, cellThree) {
    return (cellOne === player) && (cellTwo === player) && (cellThree === player)
  },

}

$(document).on('ready', function() {
  
  var game = new TicTacToe()
  newGame()


  var playButtons = $('.square')
  var resetButton = $('.reset')

  playButtons.on('mousedown', function(event)  {  
    event.preventDefault()
    var button = $(this)

    var squareID = $(this).data('square')
    var square = $('.' + squareID)

    game.play(button, square)
    
  })

  resetButton.on('mousedown', function(event)  {  
    event.preventDefault() 
    newGame()  

  })

  function newGame() {
    game = new TicTacToe()
    game.resetGame()
    game.startGame()
  }
})