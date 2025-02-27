
export function hello(name) {
  if (typeof name === 'undefined') {
    return `Hello!`;
  }

  if (typeof name !== 'string') {
    return `Hello, stranger!`;
  }

  return `Hello, ${name}`
}