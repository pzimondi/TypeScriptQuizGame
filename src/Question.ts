/**
 * Question.ts
 * Defines the Question class which models a single quiz item.
 * Each question holds the prompt text, the four answer choices,
 * and the letter of the correct answer.
 */

/**
 * Represents a single multiple-choice quiz question.
 */
export class Question {
  /** The question text displayed to the player */
  readonly text: string;

  /**
   * The four answer choices.
   * Keys must be exactly A, B, C, D.
   */
  readonly choices: Record<"A" | "B" | "C" | "D", string>;

  /** The letter key of the correct answer */
  readonly answer: "A" | "B" | "C" | "D";

  /**
   * Creates a new Question instance.
   * @param text    - The question prompt.
   * @param choices - Object mapping A/B/C/D to answer strings.
   * @param answer  - The correct choice letter.
   */
  constructor(
    text: string,
    choices: Record<"A" | "B" | "C" | "D", string>,
    answer: "A" | "B" | "C" | "D"
  ) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   * Checks whether the player's input matches the correct answer.
   * Comparison is case-insensitive.
   * @param input - The player's raw input string.
   * @returns true if the input is the correct letter.
   */
  isCorrect(input: string): boolean {
    return input.trim().toUpperCase() === this.answer;
  }

  /**
   * Formats the question and its choices into a display string.
   * @returns A multi-line string ready to print to the terminal.
   */
  format(): string {
    const lines: string[] = [`\n${this.text}`];
    for (const [key, value] of Object.entries(this.choices)) {
      lines.push(`  ${key}) ${value}`);
    }
    return lines.join("\n");
  }
}
