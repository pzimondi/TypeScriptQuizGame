/**
 * scoreCalculator.ts
 * Provides a pure recursive function for tallying correct answers.
 * Using recursion here instead of a simple loop is an intentional
 * demonstration of the TypeScript recursion requirement.
 *
 * The function walks through the boolean results array one element
 * at a time, adding 1 for each true value and returning the total
 * once it reaches the end of the array.
 */

/**
 * Recursively counts the number of true values in a boolean array.
 *
 * Base case  : index equals the length of the array → return 0.
 * Recursive case: value at current index + result of the next call.
 *
 * @param results - Array of booleans (true = correct answer).
 * @param index   - Current position in the array (start at 0).
 * @returns The total number of correct answers.
 *
 * @example
 * calculateScore([true, false, true, true, false], 0); // → 3
 */
export function calculateScore(results: boolean[], index: number): number {
  // Base case: we have walked past the last element
  if (index >= results.length) {
    return 0;
  }

  // Convert the boolean at the current index to 0 or 1,
  // then add the result of processing the rest of the array.
  const currentPoint = results[index] ? 1 : 0;
  return currentPoint + calculateScore(results, index + 1);
}
