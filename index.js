// IF...ELSE IF...ELSE STATEMENTS
/*
if (expression 1) {
   Statement(s) to be executed if expression 1 is true
} else if (expression 2) {
   Statement(s) to be executed if expression 2 is true
} else if (expression 3) {
   Statement(s) to be executed if expression 3 is true
} else {
   Statement(s) to be executed if no expression is true
}
*/
// console.log() - shows in terminal, will be undefined
function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!'
  } else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
};
// TERNARY OPERATOR
// condition ? value_if_true : value_if_false
function ternaryCheckCity(destination){
  return (destination === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}
// SWITCH STATEMENTS
function switchOnCharmFromTip(generousity){
  switch (generousity) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}