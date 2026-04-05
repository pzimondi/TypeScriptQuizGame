/**
 * quiz.ts
 * TypeScript Quiz Game — entry point
 * Runs a 5-question multiple-choice quiz in the terminal using
 * Node's readline/promises for async input, a Question class to
 * model each item, a Quiz class to manage the session, a recursive
 * score calculator, and a custom QuizError for exception handling.
 *
 * Author : Pastor Munashe Zimondi
 * Course : CSE 310 – Applied Programming
 */

import { Quiz } from "./QuizGame";
import { questions } from "./questions";

/**
 * main — bootstraps the quiz application.
 * Wraps everything in try/catch so any unexpected error
 * (including a thrown QuizError) exits cleanly.
 */
async function main(): Promise<void> {
  try {
    const quiz = new Quiz(questions);
    await quiz.run();
  } catch (err: unknown) {
    // Handles both QuizError and any other runtime error
    if (err instanceof Error) {
      console.error(`\n⚠  Something went wrong: ${err.message}`);
    } else {
      console.error("\n⚠  An unknown error occurred. Exiting.");
    }
    process.exit(1);
  }
}

main();
