# Google-translate-in-terminal

Use google translate in terminal.

[![npm](https://img.shields.io/npm/v/google-translate-in-terminal)](https://www.npmjs.com/package/google-translate-in-terminal)
[![npm](https://img.shields.io/npm/dt/google-translate-in-terminal)](https://www.npmjs.com/package/google-translate-in-terminal)
[![Build Status](https://travis-ci.org/aoyamaY/google-translate-in-terminal.svg?branch=master)](https://travis-ci.org/aoyamaY/google-translate-in-terminal) 
[![GitHub License](https://img.shields.io/github/license/aoyamaY/google-translate-in-terminal)](https://github.com/aoyamaY/google-translate-in-terminal/blob/master/LICENSE)

[![dependencies Status](https://david-dm.org/aoyamaY/google-translate-in-terminal/status.svg)](https://david-dm.org/aoyamaY/google-translate-in-terminal)
[![devDependencies Status](https://david-dm.org/aoyamaY/google-translate-in-terminal/dev-status.svg)](https://david-dm.org/aoyamaY/google-translate-in-terminal?type=dev)

## Installation

```bash
$ npm install google-translate-in-terminal -g
```

## Usage

```bash
$ google-translate こんにちは世界
```

For short:

```bash
$ gt こんにちは世界
```

Translate the clipboard: (just type in `gt`)

```bash
$ gt
```

Mutileline with quotes:

```bash
$ gt "強風のなかでは
木の葉は
落下しないで
鳥のように木から
まっすぐに飛び立つ"
```

Set source and target language:

```bash
$ gt --setting
```

## Supported Languages

Support over **100** languages, for more see official [documentation](https://cloud.google.com/translate/docs/languages).

## License

[MIT](https://github.com/aoyamaY/google-translate-in-terminal/blob/master/LICENSE)