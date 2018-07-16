jest.mock('fs');
const fs = require('fs');
const FileSummarizer = require('../FileSummarizer');

describe('listFilesInDirectorySync', () => {
  const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents'
  };

  beforeEach(() => {
    // モックファイルをセットする
    fs.__setMockFiles(MOCK_FILE_INFO);
  });

  it('includes all files in the directory in the summary', () => {
    const fileSummary = FileSummarizer.summarizeFilesInDirectorySync(
      '/path/to'
    );

    expect(fileSummary.length).toBe(2);
  });
});
