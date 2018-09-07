# skyline

Base class for Lexer/Parser.

## Usage

For Lexer:

```js
const { BaseLexer } = require('@jacksontian/skyline');

class Lexer extends BaseLexer {
  constructor(source, filename) {
    super(source, filename);
  }
}
```

For Parser:

```js
const { BaseParser } = require('@jacksontian/skyline');

class Parser extends BaseParser {
  constructor(lexer) {
    super(lexer);
  }
}
```

## License
The MIT license.
