// importing readline package
const readlineSync = require("readline-sync");
const chalk = require("chalk");
let score = 0;

let userName = readlineSync.question("May I know your Name? ");
console.log(
  `Hi ${chalk.bgBlue.bold(
    userName
  )}, Welcome to QUIZ where we test your general knowledge with the following ${chalk.bgWhite.underline(
    12
  )} questions. Lets get started. Your initial score is set to zero.`
);
console.log("---------------------------------------------");

// funciton for q&a
function quiz(question, option, answer1, answer2, answer3) {
  console.log(question);
  for (let i = 0; i < option.length; i++) {
    console.log(`[${i + 1}]. ${option[i]}`);
  }
  let userReply = readlineSync.question("Your Answer? ");

  if (
    userReply.toLowerCase() === answer1 ||
    userReply.toLowerCase() === answer2 ||
    userReply.toLowerCase() === answer3
  ) {
    score++;
    console.log(
      `Correct! Your score is increased to ${chalk.bgMagenta.bold(score)}`
    );
    console.log("---------------------------------------------");
  } else {
    score--;
    console.log(`Wrong! Your score is decreased to ${chalk.bgRed.bold(score)}`);
    console.log(`The correct answer was: ${answer1.toUpperCase()}`);
    console.log("---------------------------------------------");
  }
}

let q1 = {
  question: "In what year was the first iPhone released?",
  option: ["2006", "2007", "2004", "2005"],
  answer1: "2007",
  answer2: "2",
  answer3: "b",
};

let q2 = {
  question: "The tallest building in the world is located in which city?",
  option: ["Bengaluru", "Shanghai", "Dubai", "New York"],
  answer1: "dubai",
  answer2: "3",
  answer3: "c",
};

let q3 = {
  question: "Who directed Pulp Fiction?",
  option: [
    "Bong Joon Ho",
    "Martin Scorsese",
    "Steven Spielberg",
    "Quentin Tarantino",
  ],
  answer1: "quentin tarantino",
  answer2: "4",
  answer3: "d",
};

let q4 = {
  question: "How many actors have played the role of James Bond?",
  option: ["5", "7", "9", "11"],
  answer1: "9",
  answer2: "3",
  answer3: "c",
};

let q5 = {
  question:
    "What company is also the name of one of the longest rivers in the world?",
  option: ["Amazon", "Nile", "Yangtze", "Missouri"],
  answer1: "amazon",
  answer2: "1",
  answer3: "a",
};

let q6 = {
  question: "How many children does Queen Elizabeth have?",
  option: ["3", "5", "7", "4"],
  answer1: "4",
  answer2: "4",
  answer3: "d",
};

let q7 = {
  question: "Beirut is the capital of which country?",
  option: ["Iran", "Iraq", "Lebanon", "Cyprus"],
  answer1: "lebanon",
  answer2: "3",
  answer3: "c",
};

let q8 = {
  question: "What does GIF stand for?",
  option: [
    "Graphics Interchange Format",
    "Grinder In Flush",
    "Graphics Internet Fish",
    "Goo in Foot",
  ],
  answer1: "graphics interchange format",
  answer2: "1",
  answer3: "a",
};

let q9 = {
  question: "How many hearts does an octopus have?",
  option: ["1", "2", "3", "4"],
  answer1: "3",
  answer2: "3",
  answer3: "c",
};

let q10 = {
  question: "In the Bible, which character is known for building an ark?",
  option: ["Jesus", "Noah", "Isaac", "Joseph"],
  answer1: "noah",
  answer2: "2",
  answer3: "b",
};

let q11 = {
  question: "What currency is used in India?",
  option: ["Rupees", "Won", "Dollars", "Dhirams"],
  answer1: "rupees",
  answer2: "1",
  answer3: "a",
};

let q12 = {
  question: "Hitler party which came into power in 1933 is known as",
  option: ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"],
  answer1: "nazi party",
  answer2: "2",
  answer3: "b",
};

let qArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];

for (let i = 0; i < qArr.length; i++) {
  console.log(`QUESTION [${i + 1}.]`);
  quiz(
    qArr[i].question,
    qArr[i].option,
    qArr[i].answer1,
    qArr[i].answer2,
    qArr[i].answer3
  );
}

if (score > 0) {
  console.log(`Congrats, your total score is: ${chalk.green(score)}`);
} else {
  console.log(`Oh no!! Your score to below Zero. Better Luck Next Time!`);
}
