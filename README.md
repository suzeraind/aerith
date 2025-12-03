# Aerith

Aerith is a structured TypeScript repository designed for algorithm problem solving, powered by the [Bun](https://bun.sh) runtime. This project provides an organized environment for practicing and testing algorithmic solutions with a focus on clean code and test-driven development.

## Usage

To run a task's tests, use the following command:

```bash
bun start <task-name>
```

For example, to run the `sum` task:

```bash
bun start sum
```

This will execute the `solution.test.ts` file associated with the specified task using Bun's built-in test runner.

## Project Structure

```
.
├── src/
│   └── index.ts          # Main CLI application
└── tasks/
    └── <task-name>/      # Directory for each task
        ├── README.MD     # Task-specific documentation
        ├── solution.ts   # Task implementation
        └── solution.test.ts # Bun tests for the task
```

## Development

To install dependencies:

```bash
bun install
```

To run tests for the entire project:

```bash
bun test
```

## Task Generator

This project includes a utility script to quickly scaffold new coding tasks.

### Usage

To create a new task, run:

```bash
bun create-task <taskName>
```
