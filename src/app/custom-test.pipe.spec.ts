import { CustomTestPipe } from './custom-test.pipe';

describe('CustomTestPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomTestPipe();
    expect(pipe).toBeTruthy();
  });
});
