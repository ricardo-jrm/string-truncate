/**
 * Truncates string to fit within given length with appended ellipsis. Option to keep last word.
 */
export const stringTruncate = (
  str: string,
  length: number,
  keepLastWord?: boolean,
) => {
  if (!str || str?.length < length) return str;

  const ellipsis = '...';

  if (!keepLastWord) {
    const truncated = str.substring(0, length - ellipsis.length);
    return `${truncated}${ellipsis}`;
  }

  const words = str.split(' ');
  const target = ` ${words[words.length - 1]}`;
  const truncated = str.substring(0, length - ellipsis.length - target.length);
  return `${truncated}${ellipsis}${target}`;
};
