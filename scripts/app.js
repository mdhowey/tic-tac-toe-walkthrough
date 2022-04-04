// ==== Variables ==== //
const $start = $('#start_btn');
const $section = $('section');
const $reset = $('#reset_btn');
const $tile = $('.tile');
const $text = $('#game_text');

// Game tiles
const $1 = $('#1');
const $2 = $('#2');
const $3 = $('#3');
const $4 = $('#4');
const $5 = $('#5');
const $6 = $('#6');
const $7 = $('#7');
const $8 = $('#8');
const $9 = $('#9');

// Player scores
const $p1Score = $('#player_one_score');
const $p2Score = $('#player_two_score');
let playerOneScore = 0;
let playerTwoScore = 0;

// Turn flag
let turn = 1;

// ==== Button Event Listeners ==== //
// Start Game
$start.click(function () {
  $start.addClass('is-hidden');
  $section.removeClass('is-hidden');
  $p1Score.text(playerOneScore);
  $p2Score.text(playerTwoScore);
});

// Reset Game
$reset.click(function () {
  $start.removeClass('is-hidden');
  $section.addClass('is-hidden');
});

$tile.click(function () {
  if (turn === 1) {
    if ($(this).is(':empty')) {
      $text.text("Player 2 is up!");
      $(this).text("x");
      turn = 2;
      isEmpty = false;
      winCheck('x');
    } else {
      $(this).css("background-color", "lightcoral");
      setTimeout(() => {
        $(this).css("background-color", "white");
      }, 250);
    }
  } else {
    if ($(this).is(':empty')) {
      $text.text("Player 1 is up!");
      $(this).text("o");
      turn = 1;
      isEmpty = false;
      winCheck('o');
    } else {
      $(this).css("background-color", "lightcoral");
      setTimeout(() => {
        $(this).css("background-color", "white");
      }, 250);
    }
  }
});

function winCheck(char) {
  console.log($1.text(), $2.text(), $3.text())
  if ($1.text() === char && $2.text() === char && $3.text() === char) {
    if (char === 'x') {
      $text.text("Player 1 wins!");
      playerOneScore++;
    } else if (char === 'o') {
      $text.text("Player 2 wins!");
      playerTwoScore++;
    }
    return true;
  } else if ($3.text() === char && $4.text() === char && $5.text() === char) {
    if (char === 'x') {
      $text.text("Player 1 wins!");
      playerOneScore++;
    } else if (char === 'o') {
      $text.text("Player 2 wins!");
      playerTwoScore++;
    }
    return true;
  } else if ($6.text() === char && $7.text() === char && $8.text() === char) {
    if (char === 'x') {
      $text.text("Player 1 wins!");
      playerOneScore++;
    } else if (char === 'o') {
      $text.text("Player 2 wins!");
      playerTwoScore++;
    }
    return true;
  } else if ($1.text() === char && $4.text() === char && $7.text() === char) {
    if (char === 'x') {
      $text.text("Player 1 wins!");
      playerOneScore++;
    } else if (char === 'o') {
      $text.text("Player 2 wins!");
      playerTwoScore++;
    }
    return true;
  } else if ($2.text() === char && $5.text() === char && $8.text() === char) {
    if (char === 'x') {
      $text.text("Player 1 wins!");
      playerOneScore++;
    } else if (char === 'o') {
      $text.text("Player 2 wins!");
      playerTwoScore++;
    }
    return true;
  } else if ($3.text() === char && $6.text() === char && $9.text() === char) {
    if (char === 'x') {
      $text.text("Player 1 wins!");
      playerOneScore++;
    } else if (char === 'o') {
      $text.text("Player 2 wins!");
      playerTwoScore++;
    }
    return true;
  } else if ($1.text() === char && $5.text() === char && $9.text() === char) {
    if (char === 'x') {
      $text.text("Player 1 wins!");
      playerOneScore++;
    } else if (char === 'o') {
      $text.text("Player 2 wins!");
      playerTwoScore++;
    }
    return true;
  } else if ($3.text() === char && $5.text() === char && $7.text() === char) {
    if (char === 'x') {
      $text.text("Player 1 wins!");
      playerOneScore++;
    } else if (char === 'o') {
      $text.text("Player 2 wins!");
      playerTwoScore++;
    }
    return true;
  }
  return false;
}

// [1w,2w,3w,4,5,6,7,8,9]
// [1,2,3,4w,5w,6w,7,8,9]
// [1,2,3,4,5,6,7w,8w,9w]
// [1w,2,3,4w,5,6,7w,8,9]
// [1,2w,3,4,5w,6,7,8w,9]
// [1,2,3w,4,5,6w,7,8,9w]
// [1w,2,3,4,5w,6,7,8,9w]
// [1,2,3w,4,5w,6,7w,8,9]