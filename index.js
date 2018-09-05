'use strict';

const Lexer = require('./lib/lexer');
const Parser = require('./lib/parser');

module.exports = {
  Lexer,
  Parser,
  BaseLexer: Lexer,
  BaseParser: Parser,
  Token: require('./lib/token')
};
