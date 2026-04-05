# TypeScript Quiz Game

## Overview

I built this project as a way to push myself into typed, compiled JavaScript — something I'd been putting off because I was comfortable enough with plain JS that I never felt the urgency. TypeScript changes the game the moment you hit your first type error at compile time instead of at runtime in front of a user, and I wanted to experience that discipline first-hand.

The software is a command-line multiple-choice quiz game written entirely in TypeScript and run with Node.js. The player is asked five questions about TypeScript and JavaScript fundamentals, types A, B, C, or D to answer each one, gets instant right/wrong feedback after every question, and sees a final score summary at the end. There is no browser, no database, no server — just clean TypeScript compiling down to JavaScript and running straight from the terminal with `ts-node`.

I chose this project because every required language feature maps onto it naturally. Classes model the quiz data. A typed array stores the questions. Async/await handles the user input without blocking. Recursion walks through the results to calculate the score. A custom exception class catches anything unexpected. The whole thing is small enough to explain on camera in five minutes but rich enough to touch every concept that matters.

[Software Demo Video](http://youtube.link.goes.here)

## Development Environment

- **Editor**: Visual Studio Code with the TypeScript and ESLint extensions
- **Runtime**: Node.js v20 (LTS)
- **Language**: TypeScript 5.4
- **Execution**: ts-node (runs TypeScript directly without a separate compile step)
- **Package manager**: npm
- **Dependencies**:
  - `typescript` — the TypeScript compiler
  - `ts-node` — runs `.ts` files directly in Node
  - `@types/node` — TypeScript type definitions for Node.js built-ins (readline, process, etc.)

## Useful Websites

- [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Node.js readline/promises documentation](https://nodejs.org/api/readline.html)
- [TypeScript Deep Dive (free e-book)](https://basarat.gitbook.io/typescript/)
- [MDN – async function reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Stack Overflow – fixing instanceof with custom errors in TypeScript](https://stackoverflow.com/questions/41102060/typescript-extending-error-class)

## Future Work

- Add more question categories (e.g. Node.js, React, general CS concepts) so the quiz doesn't repeat after a few runs.
- Shuffle both the question order and the answer choices on each run so the player can't memorise positions.
- Persist a high-score leaderboard to a local JSON file so scores survive between sessions.
