# Aerith

Aerith is a structured TypeScript repository designed for algorithm problem solving with integrated Jest testing framework. This project provides an organized environment for practicing and testing algorithmic solutions with a focus on clean code and test-driven development.
## Usage

To run a task, use the following command:

```bash
npm start <task-name>
```

For example, to run the `sum` task:

```bash
npm start sum
```

This will execute the `test.ts` file associated with the specified task using Jest.

## Project Structure

```
.
├── src/
│   └── index.ts          # Main CLI application
└── tasks/
    └── <task-name>/      # Directory for each task
        ├── README.MD     # Task-specific documentation
        ├── solution.ts   # Task implementation
        └── test.ts       # Jest tests for the task
```

## Development

To install dependencies:

```bash
npm install
```

To run tests for the entire project:

```bash
npm test
```
## Task Generator

This project includes a utility script to quickly scaffold new coding tasks.

### Usage

To create a new task, run:

```bash
npm run create-task <taskName>
```
