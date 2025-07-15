# Word Game

## Joy of React, Project I

This project is based on an exercise from Josh Comeau's **"Joy of React"** course, which I'm currently working through.

It’s a Wordle clone built using React. The goal was to recreate the core game mechanics: submitting guesses, checking accuracy, and tracking win/loss states — all while building accessible, clean UI components.

While the initial structure and styling were provided by the course, I implemented the logic, state management, user input handling, and win/loss feedback myself.

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)

In Wordle, users have 6 attempts to guess a 5-letter word. You're helped along the way by ruling out letters that aren't in the word, and being told whether the correct letters are in the correct location or not.

## Getting Started

This project uses [Parcel](https://parceljs.org/) for bundling. To run it locally:

```bash
npm install
npm start