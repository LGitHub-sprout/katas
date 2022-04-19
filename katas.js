/************************* Kata CodeWars areYouPlayingBanjo(name)  *********************

  Create a function which answers the question "Are you playing banjo?".
  If your name starts with the letter "R" or lower case "r", you are playing banjo!

  The function takes a name as its only argument, and returns one of the following strings:

  name + " plays banjo" 
  name + " does not play banjo"

  Names given are always valid strings.

  @param  name    string  

  @var    text    string

  return text

  PseudoCode
  if the first character of name variable
  is upper or lowercase 'R'
  return 'name plays banjo' text
  otherwise, return 'name does not play banjo' text.
    indexOf returns index [0], [1], etc.
    i can access first ltr with bracket notation.


    // if (name[0] === 'r' || name[0] === 'R') {
  //   name += " plays banjo";
  // } else {
  //   name += " does not play banjo";
  // }
*/
function areYouPlayingBanjo(name) {
  // ternary
  name = name[0] === 'r' || name[0] === 'R' ? name += " plays banjo" : name += " does not play banjo";
  return name;
}
// console.log(areYouPlayingBanjo('Red'))

/************************* Kata CodeWars sumSquares(a, b, c)  *********************/
function sumSquares(a, b, c) {
  sum1 = a ^ 2;
  sum2 = b ^ 2;
  sum3 = c ^ 2;

  total = sum1 + sum2 + sum3;

  return total * total;
}
// console.log('sumSquares ', sumSquares(5, 4, 2));