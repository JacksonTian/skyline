'use strict';

class Parser {
  constructor(lexer) {
    this.lexer = lexer;
    this.look = null;
  }

  tagTip(tag) {
    throw new Error('Need to implement tagTip method!');
  }

  move() {
    throw new Error('Need to implement move method!');
  }

  match(tag) {
    if (this.look.tag === tag) {
      this.move();
    } else {
      this.error(`Expect ${this.tagTip(tag)}, but ${this.tokenTip(this.look)}`);
    }
  }

  matchWord(tag, lexeme) {
    if (this.look.tag === tag && this.look.lexeme === lexeme) {
      this.move();
    } else {
      this.error(`Expect ${this.tagTip(tag)} ${lexeme}, but ${this.tokenTip(this.look)}`);
    }
  }

  is(tag) {
    return this.look.tag === tag;
  }

  isWord(tag, lexeme) {
    return this.look.tag === tag && this.look.lexeme === lexeme;
  }

  tokenTip(token) {
    if (!token.tag) {
      return 'EOF';
    }

    return this.look;
  }

  error(message) {
    const lexer = this.lexer;
    const token = this.look;
    console.log(`${lexer.filename}:${token.loc.start.line}:${token.loc.start.column}`);
    console.log(`${lexer.source.split('\n')[token.loc.start.line - 1]}`);
    console.log(`${' '.repeat(token.loc.start.column - 1)}^`);
    const prefix = `Unexpected token: ${this.tokenTip(token)}.`;
    throw new SyntaxError(`${prefix} ${message}`);
  }
}

module.exports = Parser;
