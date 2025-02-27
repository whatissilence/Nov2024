import { hello } from './hello.js';

describe('Hello function', () => {
  it('returns hello name if passed string as parameter', () => {
    expect(hello('Oleksii')).toEqual('Hello, Oleksii');
    expect(hello('Dmitro')).toEqual('Hello, Dmitro');
  })

  it('return hello! if not passed parameters', () => {
    expect(hello()).toEqual('Hello!');
  })

  it('return hello stranger! if passed not a string', () => {
    expect(hello(22)).toEqual('Hello, stranger!');
    expect(hello([])).toEqual('Hello, stranger!');
  })
})