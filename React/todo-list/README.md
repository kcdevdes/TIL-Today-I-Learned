# 📝 Todo List Application

> An elegant and efficient task management solution, meticulously crafted with React, TypeScript, and Vite.

## ✨ Key Features

- Effortlessly add new tasks to your agenda
- Seamlessly remove completed or obsolete tasks
- Instantly visualize and manage your entire task inventory

## 🛠️ Technologies Leveraged

- **React** – Declarative UI library for building interactive interfaces
- **TypeScript** – Strongly-typed superset of JavaScript for robust code
- **Vite** – Lightning-fast build tool and development server
- **ESLint** – Automated code quality and style enforcement

## 🚀 Getting Started

Embark on your productivity journey by setting up the application locally. Follow the steps below for a seamless onboarding experience.

### Prerequisites

- [Node.js](https://nodejs.org/) & [npm](https://www.npmjs.com/)
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```

## 📜 Available Scripts

Within the project directory, leverage the following npm scripts to streamline your workflow:

### `npm run dev`

Launches the application in development mode.\
Access the interactive interface at [http://localhost:5173](http://localhost:5173).\
Hot-reloading ensures instantaneous feedback on code changes, while lint errors are surfaced in real time.

### `npm run build`

Compiles and optimizes the application for production, outputting to the `dist` directory.\
Minification and hashed filenames guarantee optimal performance and cache efficiency.

### `npm run lint`

Analyzes the codebase for stylistic and syntactic discrepancies using ESLint, promoting code excellence.

### `npm run preview`

Serves the production build locally, enabling a final review before deployment.

## 🗂️ Project Structure

```text
todo-list/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── node_modules/
├── public/
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── assets/
    ├── components/
    │   ├── AddTask.tsx
    │   └── TaskList.tsx
    └── models/
        └── Task.tsx
```

---

## 💡 Contributing

Contributions, suggestions, and enhancements are warmly welcomed! Feel free to open issues or submit pull requests to help improve this project.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

# Todo List App

This is a simple todo list application built with React, TypeScript, and Vite.

## Features

- Add new tasks to the list.
- Delete tasks from the list.
- View a list of all tasks.

## Technologies Used

- React
- TypeScript
- Vite
- ESLint

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Lints the project files using ESLint.

### `npm run preview`

Serves the production build locally for preview.

## Project Structure

```
/Users/gchoi/Development/Tutorials/Web/todo-list/
├───.gitignore
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───README.md
├───tsconfig.app.json
├───tsconfig.json
├───tsconfig.node.json
├───vite.config.ts
├───node_modules/...
├───public/
└───src/
    ├───App.css
    ├───App.tsx
    ├───index.css
    ├───main.tsx
    ├───vite-env.d.ts
    ├───assets/
    ├───components/
    │   ├───AddTask.tsx
    │   └───TaskList.tsx
    └───models/
        └───Task.tsx
```
