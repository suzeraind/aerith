import * as fs from "fs";
import * as path from "path";

const taskName = process.argv[2];

if (!taskName) {
  console.error("Please provide a task name. Example: npm run create-task myTask");
  process.exit(1);
}

const tasksDir = path.join(__dirname, "..", "tasks");
const taskDir = path.join(tasksDir, taskName);

if (fs.existsSync(taskDir)) {
  console.error(`Task folder "${taskName}" already exists`);
  process.exit(1);
}

fs.mkdirSync(taskDir, { recursive: true });

const functionTemplate = `export function ${taskName}() {
  // TODO: implement ${taskName}
}
`;
fs.writeFileSync(path.join(taskDir, 'solution.ts'), functionTemplate);

const readmeTemplate = `# ${taskName}

Task description...
`;
fs.writeFileSync(path.join(taskDir, "README.md"), readmeTemplate);

const testTemplate = `import { expect, test } from "bun:test";
import { ${taskName} } from "./solution";

test("${taskName} should work", () => {
  // TODO: write tests
  expect(${taskName}()).toBeDefined();
});
`;
fs.writeFileSync(path.join(taskDir, "solution.test.ts"), testTemplate);

console.log(`Task "${taskName}" has been created in ./tasks/solution.ts`);