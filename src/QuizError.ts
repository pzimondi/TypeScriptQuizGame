/**
 * QuizError.ts
 * Defines a custom error class for quiz-specific exceptions.
 * By extending the built-in Error class we get a proper stack
 * trace and can differentiate quiz errors from other runtime
 * errors using instanceof checks in the catch block of quiz.ts.
 */

/**
 * Custom error thrown when something goes wrong during the quiz —
 * for example, an empty question list or an invalid player input.
 */
export class QuizError extends Error {
  /**
   * Creates a new QuizError.
   * @param message - Human-readable description of what went wrong.
   */
  constructor(message: string) {
    super(message);

    // Restore the correct prototype chain so instanceof works
    // reliably when TypeScript compiles down to ES5.
    Object.setPrototypeOf(this, QuizError.prototype);

    this.name = "QuizError";
  }
}
