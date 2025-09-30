var isPlaying = true;
while (isPlaying){

// player pick
var p = prompt('pilih: gajah, semut, orang');

// random math for computer pick
var comp = Math.random();

if (comp < 0.34) {
  comp = 'gajah';
} else if (comp >= 0.34 && comp < 0.67) {
  comp = 'orang';
} else {
  comp = 'semut';
}

var result = '';

// rules
if (p == comp) {
  result = 'DRAW';
} else if (p == 'gajah') {
  result = comp == 'orang' ? 'WIN!' : 'LOSE!';
} else if (p == 'orang') {
  result = comp == 'gajah' ? 'LOSE!' : 'WIN!';
} else if (p == 'semut') {
  result = comp == 'orang' ? 'LOSE!' : 'WIN!';
} else {
  result = 'Wrong input!';
}

// result
alert(
  'You choose: ' +
    p +
    ' and enemy pick: ' +
    comp +
    '\nResult is : You ' +
    result
);

isPlaying = confirm('play again?');
}

alert('Thanks for playing!');