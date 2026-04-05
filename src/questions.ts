/**
 * questions.ts
 * Defines the five quiz questions used in the TypeScript Quiz Game.
 * All questions are about TypeScript, JavaScript, and general
 * programming concepts — keeping the theme consistent with the
 * project's learning goals.
 *
 * The questions are stored in a typed array: Question[]
 * This demonstrates the use of typed lists in TypeScript.
 */

import { Question } from "./Question";

/**
 * The master list of quiz questions.
 * Add more Question objects here to extend the quiz.
 */
export const questions: Question[] = [
  new Question(
    "1. What does TypeScript add on top of JavaScript?",
    {
      A: "A runtime environment like Node.js",
      B: "Static type checking and type annotations",
      C: "A built-in database connection library",
      D: "HTML rendering capabilities",
    },
    "B"
  ),

  new Question(
    "2. Which keyword is used to declare an immutable variable in TypeScript?",
    {
      A: "var",
      B: "let",
      C: "const",
      D: "static",
    },
    "C"
  ),

  new Question(
    "3. What is the output of: console.log(typeof null) in JavaScript/TypeScript?",
    {
      A: '"null"',
      B: '"undefined"',
      C: '"object"',
      D: '"boolean"',
    },
    "C"
  ),

  new Question(
    "4. Which of the following correctly defines an interface in TypeScript?",
    {
      A: "interface Shape { area: () => number; }",
      B: "interface Shape => { area: number }",
      C: "define Shape { area(): number }",
      D: "type Shape implements { area: number }",
    },
    "A"
  ),

  new Question(
    "5. What does the async keyword do when placed before a function?",
    {
      A: "Makes the function run faster",
      B: "Makes the function return a Promise automatically",
      C: "Prevents the function from throwing errors",
      D: "Turns the function into a generator",
    },
    "B"
  ),
];
