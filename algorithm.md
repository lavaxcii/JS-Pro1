(1) Make two players (functions?) (one is computer)
  (1.1) Player gets to input rock paper or scissor 
    (1.1.1) We dont actually need player f when player input can be taken and passed onto the game function which has if-then loop game logic and evaluetes it like that
    (1.1.2) Do we need any kind of variable for storing player input or we just directly pass player input onto the game function?
  (1.2) Computer gets randomly chosen r-p-s
  (1.3) Computer needs to use preexisted r-p-s from and array, but also we need rng function (math random) which will chose r, p or s against player input
  (1.4) Connect rng number with array index (?)

(2) Make function which plays game, game function - it takes player input and computer rng-r-p-s and decides who wins
  (2.0) Make default parameter or if wrong argument inputed give back 'error' to player
  (2.1) That function might actually be if-then loop or switch statements which evaluates player and computer input and decides winner
  (2.2) Make victory declaration after the evaluation
