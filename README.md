# React Quiz

An interactive quiz app built with React to test your knowledge of React concepts and features.

## Table of Contents

- Introduction
- Features
- Getting Started
- Components
- Dependencies
- Usage
- Contributing

## Introduction

This project is a simple, yet engaging quiz app designed to help you reinforce your understanding of React. It's a great resource for beginners or anyone looking for a quick refresher on React fundamentals.

## Features

- **Multiple Choice Questions:** A variety of questions to challenge your React knowledge.
- **Dynamic Question Loading:**  Questions are fetched from a local JSON file using the `fetch` API.
- **Immediate Feedback:** See whether your answers are correct or incorrect right away.
- **Points System:** Earn points for each correct answer to track your progress.
- **Loader and Error Handling:** Provides visual feedback during loading and in case of errors.
- **Counter App (Bonus):** A separate counter app that demonstrates the use of `useReducer` in React.

## Getting Started

1. **Prerequisites:**
   - Node.js and npm (or yarn) installed on your machine.

2. **Installation:**
   - Clone the repository: `git clone https://your-repo-url.git`
   - Navigate to the project directory: `cd react-quiz`
   - Install dependencies: `npm install` (or `yarn install`)

3. **Running the App:**
   - **Important:** Start the JSON server first: `npm run server` (This will provide the quiz data)
   - In a new terminal window, start the development server: `npm start` (or `yarn start`)
   - Open your browser and visit: `http://localhost:3000`

## Components

- **`App`:** The root component that manages the quiz's state and rendering.
- **`Header`:** Displays the app header with the logo and title.
- **`Main`:** The main content area that displays either the quiz, the loader, or the error message.
- **`Loader`:** A simple loading indicator.
- **`Error`:** An error message component.
- **`StartScreen`:** The initial screen prompting the user to start the quiz.
- **`Question`:** Displays the current question and answer options.
- **`Options`:** Handles the rendering and interaction with answer buttons.
- **`DateCounter` (bonus):** A counter app showcasing the use of `useReducer`.

## Dependencies

- React
- react-scripts
- json-server (for mocking the API)

## Usage

1. Read the question carefully.
2. Click the button corresponding to your answer.
3. The app will immediately provide feedback on your choice.
4. Continue to the next question and repeat.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
