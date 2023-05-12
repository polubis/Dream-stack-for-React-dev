// This import is essential.
import path from 'path';

// This we will test.
import { createArticlePath } from '.';

const basePath = 'C:\\Users\\pracapraca\\Dream-stack-for-React-dev\\system';

// We replace the implementation of the path module.
jest.mock('path', () => ({
  join: jest.fn(), // Allows methods from "jest" be used.
}));

describe('Path for dedicated article is created when', () => {
  // Temp variable.
  const originalCwd = process.cwd;

  beforeAll(() => {
    // We replace the cwd method implementation.
    Object.defineProperty(process, 'cwd', {
      value: () => basePath,
      writable: true,
    });
  });

  afterAll(() => {
    // We restore the original implementation.
    process.cwd = originalCwd;
  });

  it('absolute path is composed', () => {
    // We replace the implementation.
    (path.join as jest.Mock).mockImplementationOnce((...args: string[]) =>
      args.join('\\')
    );

    const result = createArticlePath('en', 'my-file.mdx');

    // We check that the path is correct.
    expect(result).toBe(
      basePath + '\\apps\\blog\\content\\en\\articles\\my-file.mdx'
    );
  });
});
