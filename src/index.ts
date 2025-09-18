import * as path from 'path';
import * as fs from 'fs';
import { runCLI } from 'jest';

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

  const result = await runCLI({
    testMatch: [path.join(taskPath, 'test.ts')],
  } as any, [process.cwd()]);

  console.log(result.results);
};

main();