var userName = "She";
var userQuestion = "What is your best favorite number";
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = " ";

if (userName === " ") {
  console.log("Hello");
} else {
  console.log(`Hello ${userName}`);
  console.log(`${userQuestion}?`);
}

console.log(randomNumber);

eightBall = randomNumber;

if (eightBall >= 0 && eightBall <= 1) {
  console.log("It is certain");
} else if (eightBall > 1 && eightBall <= 2) {
  console.log("It is decidedly so");
} else if (eightBall > 2 && eightBall <= 3) {
  console.log("Reply hazy try again");
} else if (eightBall > 3 && eightBall <= 4) {
  console.log("Cannot predict now");
} else if (eightBall > 4 && eightBall <= 5) {
  console.log("Do not count on it");
} else if (eightBall > 5 && eightBall <= 6) {
  console.log("My sources say no");
} else if (eightBall > 6 && eightBall <= 7) {
  console.log("Outlook not so good");
} else console.log("Signs point to yes");
