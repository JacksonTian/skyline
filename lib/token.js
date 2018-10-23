'use strict';

class Token {
  constructor(tag, loc) {
    this.tag = tag;
    this.loc = loc;
  }

  toString() {
    return `${this.tag}`;
  }
}

module.exports = Token;
