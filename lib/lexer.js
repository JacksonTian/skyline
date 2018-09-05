'use strict';

class Lexer {
  constructor(source, filename, offset = {}) {
    this.source = source;
    this.filename = filename;

    this.index = offset.index || -1;
    this.peek = ' ';
    this.words = new Map();
    this.line = offset.line || 1;
    this.column = offset.column || 1;
  }

  // read a char
  getch() {
    this.index++;
    this.column++;
    this.peek = this.source[this.index]; // 其它返回实际字节值
  }

  ungetch() {
    this.index--;
    this.column--;
    this.peek = this.source[this.index]; // 其它返回实际字节值
  }

  reserve(word) {
    this.words.set(word.lexeme, word);
  }

  skipWhitespaces() {
    // 忽略空格,和TAB ch =='\n'
    while (this.peek === ' ' || this.peek === '\t' ||
      this.peek === '\n' || this.peek === '\r') {
      if (this.peek === '\n') {
        // line number
        this.line++;
        this.column = 0;
      }
      this.getch();
    }
  }
}

module.exports = Lexer;
