import { stringTruncate } from '.';

describe('truncate strings', () => {
  const lorem = 'Lorem ipsum dolor sit amet';
  const length = 20;

  it('should be same length', () => {
    const truncated = stringTruncate(lorem, length);
    expect(truncated).toHaveLength(length);
  });

  it('should truncate "Lorem ipsum dolor sit amet" to "Lorem ipsum dolor..."', () => {
    const truncated = stringTruncate(lorem, length);
    expect(truncated).toBe('Lorem ipsum dolor...');
  });

  it('should be same length, incl last word', () => {
    const truncated = stringTruncate(lorem, length, true);
    expect(truncated).toHaveLength(length);
  });

  it('should truncate "Lorem ipsum dolor sit amet" to "Lorem ipsum ... amet"', () => {
    const truncated = stringTruncate(lorem, length, true);
    expect(truncated).toBe('Lorem ipsum ... amet');
  });
});
