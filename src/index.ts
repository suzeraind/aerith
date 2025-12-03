import * as path from 'path';
import * as fs from 'fs';

const main = async () => {
  const taskName = process.argv[2];

  if (!taskName) {
    console.error('Please provide task name');
    process.exit(1);
  }

  const taskPath = path.join(__dirname, '..', 'tasks', taskName);

  if (!fs.existsSync(taskPath)) {
    console.error(`Task "${taskName}" not found`);
    process.exit(1);
  }

  const testFile = path.join(taskPath, 'solution.test.ts');

  const proc = Bun.spawn(["bun", "test", testFile], {
    stdout: "inherit",
    stderr: "inherit",
  });

  await proc.exited;
};

main();