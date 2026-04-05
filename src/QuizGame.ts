/**
 * Quiz.ts
 * Defines the Quiz class which manages the full game session.
 * Responsibilities:
 *   - Display each question and wait for async user input
 *   - Record the player's answers in a typed array
 *   - Delegate score calculation to a recursive function
 *   - Print the final result summary
 */

import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { Question } from "./Question";
import { QuizError } from "./QuizError";
import { calculateScore } from "./scoreCalculator";

/** Valid answer keys the player may type */
type AnswerKey = "A" | "B" | "C" | "D";

/**
 * Manages the quiz session from start to finish.
 */
export class Quiz {
  /** The list of questions to be asked */
  private readonly questions: Question[];

  /** The player's answers, stored in order */
  private readonly playerAnswers: string[] = [];

  /**
   * Creates a Quiz instance.
   * @param questions - Array of Question objects to present.
   * @throws QuizError if the question array is empty.
   */
  constructor(questions: Question[]) {
    if (questions.length === 0) {
      throw new QuizError("Cannot start a quiz with no questions.");
    }
    this.questions = questions;
  }

  /**
   * Runs the full quiz session asynchronously.
   * Opens a readline interface, asks each question in order,
   * collects answers, calculates the score, then prints results.
   */
  async run(): Promise<void> {
    const rl = readline.createInterface({ input, output });

    console.log("\n========================================");
    console.log("       Welcome to the TypeScript Quiz!  ");
    console.log("========================================");
    console.log("Answer each question with A, B, C, or D.\n");

    // Ask each question and collect answers into the typed array
    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];
      console.log(`Question ${i + 1} of ${this.questions.length}:`);
      console.log(question.format());

      const raw: string = await rl.question("\nYour answer: ");
      const answer = raw.trim().toUpperCase();

      // Validate that the player typed a recognised letter
      if (!["A", "B", "C", "D"].includes(answer)) {
        rl.close();
        throw new QuizError(
          `Invalid input "${raw}". Please enter A, B, C, or D.`
        );
      }

      this.playerAnswers.push(answer as AnswerKey);

      // Give immediate feedback after each answer
      if (question.isCorrect(answer)) {
        console.log("✓ Correct!\n");
      } else {
        console.log(
          `✗ Wrong! The correct answer was ${question.answer}.\n`
        );
      }
    }

    rl.close();
    this.printResults();
  }

  /**
   * Prints the final score summary once all questions are answered.
   * Uses the recursive calculateScore helper to tally correct answers.
   */
  private printResults(): void {
    // Build a results array: true for each correct answer, false otherwise
    const results: boolean[] = this.questions.map((q, i) =>
      q.isCorrect(this.playerAnswers[i])
    );

    // Delegate tallying to the recursive function
    const score = calculateScore(results, 0);
    const total = this.questions.length;
    const percentage = Math.round((score / total) * 100);

    console.log("========================================");
    console.log(`         Quiz Complete! Results         `);
    console.log("========================================");
    console.log(`Score: ${score} / ${total}  (${percentage}%)`);

    if (percentage === 100) {
      console.log("🏆 Perfect score! Outstanding!");
    } else if (percentage >= 80) {
      console.log("🎉 Great job! Keep it up.");
    } else if (percentage >= 60) {
      console.log("👍 Not bad — review the ones you missed.");
    } else {
      console.log("📚 Keep studying — you'll get there!");
    }

    console.log("========================================\n");
  }
}
