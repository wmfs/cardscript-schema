# cardscript-schema

[![Tymly Cardscript](https://img.shields.io/badge/tymly-cardscript-blue.svg)](https://tymly.io/)
[![Build Status](https://travis-ci.com/wmfs/cardscript-schema.svg?branch=master)](https://travis-ci.com/wmfs/cardscript-schema)
[![npm (scoped)](https://img.shields.io/npm/v/@wmfs/cardscript-schema.svg)](https://www.npmjs.com/package/@wmfs/cardscript-schema) 
[![codecov](https://codecov.io/gh/wmfs/cardscript-schema/branch/master/graph/badge.svg)](https://codecov.io/gh/wmfs/cardscript-schema) 
[![CodeFactor](https://www.codefactor.io/repository/github/wmfs/cardscript-schema/badge)](https://www.codefactor.io/repository/github/wmfs/cardscript-schema) 
[![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/wmfs/tymly/blob/master/packages/concrete-paths/LICENSE)

> Contains a JSON Schema for Cardscript, along with a validation utility.

## <a name="install"></a>Install
```bash
$ npm install cardscript-schema --save
```

## <a name="usage"></a>Usage

```javascript
const cardscriptSchema = require('@wmfs/cardscript-schema')

const result = cardscriptSchema.validateForm(
  {
    "type": "AdaptiveCard",
    "body": [
      {
        "type": "TextBlock",
        "text": "Change me!",
        "color": "attention",
        "horizontalAlignment": "center"
      }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.0"
  }
)

if (result.elementsValid) {
  // All is well!!
} else {
  // Do something with result.errors array.
}

```

## <a name="test"></a>Testing

```bash
$ npm test
```

## <a name="license"></a>License
[MIT](https://github.com/wmfs/cardscript/blob/master/LICENSE)
