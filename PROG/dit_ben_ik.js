var readlineSync = require('readline-sync');

function askRetry() {
  const retry = readlineSync.keyInYN('Wil je de quiz opnieuw proberen? (ja/nee): ');
  return retry;
}

function runQuiz() {
  console.log("Hallo! Welkom bij mijn quiz");

  // Define the questions and correct answers
  const questions = [
    { question: 'hoeveel katten heb ik? A,4 B,2 C,1 ', correctAnswer: 'a' },
    { question: 'Wat is mijn favoriete video game? A,Fortnite B,Terraria C, Minecraft ', correctAnswer: 'b' },
    { question: 'hoeveel zussen heb ik(geen stiefzussen)? A,0 B,3 C,2 ', correctAnswer: 'c' },
    { question: 'Wat is mijn favoriete anime? A,dragon ball z B,narumid C, one piece ', correctAnswer: 'a' },
    { question: 'Hoe oud ben ik? A,17 B,18 C,16 ', correctAnswer: 'c' }
  ];

  let score = 0; // Initialize the user's score

  // Loop through each question and ask the user
  for (const q of questions) {
    const userAnswer = readlineSync.question(q.question).toLowerCase(); // Convert the answer to lowercase for case insensitivity

    if (userAnswer === q.correctAnswer) {
      console.log("Je antwoord is goed!");
      score++; // Increment the score for each correct answer
    } else {
      console.log("Je antwoord is fout. Het goede antwoord is " + q.correctAnswer);
    }

    // Limit the score to a maximum of 5
    if (score >= 5) {
      break; // Exit the loop if the maximum score is reached
    }
  }

  console.log(`Je hebt ${score} van de ${Math.min(5, questions.length)} vragen correct beantwoord!`);

  // Ask the user if they want to retry
  const retry = askRetry();
  if (retry) {
    runQuiz(); // If the user wants to retry, run the quiz again
  } else {
    console.log('Bedankt voor de quiz doen!');
  }
}

// Start the quiz
runQuiz();