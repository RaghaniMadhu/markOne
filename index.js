import readlineSync from 'readline-sync';
import chalk from 'chalk';

console.log(chalk.bgWhite.blueBright("DO YOU KNOW ME????\n"));

var questions = ["Meaning of 'Madhu':", "Where do I live?", "What is my favourite color?", "Where do I work currently?", "My lucky number?", "My birthday month?"];

var answers = ["honey", "mumbai", "blue", "accenture", "7", "september"];

var score = quiz(questions, answers);

console.log("Your score is " + score);

if (score >= (questions.length / 2)) {
  console.log("Wow! you know me really well friend.");
} else if (score > 0) {
  console.log("You know me a little bit... Let's catchup soon.");
} else {
  console.log("Hey Stranger! Nice to see you.");
}


function quiz(questions, answers) {
  var score = 0;
  for (let i = 0; i < questions.length; i++) {
    var answer = readlineSync.question(questions[i] + " ");
    if (answers[i] === answer.toLowerCase()){
      score++;
      console.log(chalk.green("That's correct."));
    }
    else {
      console.log(chalk.red("That's incorrect."))
      console.log("correct answer is " + chalk.green(answers[i]));
    }
    console.log(chalk.blue("Current Score: " + score) + "\n------------------\n");
  }
  return score;
}
