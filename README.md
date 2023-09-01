
### Add NPM Token

Add your npm token to your GitHub repository secrets as `NPM_TOKEN`.

### Add Codecov integration

Enable the Codecov GitHub App [here](https://github.com/apps/codecov).

**Remove everything from here and above**

---

# bns-resolver

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> My awesome module

## Install

```bash
npm install bns-resolver
```

## Usage

```ts
import { myPackage } from 'bns-resolver';

myPackage('hello');
//=> 'hello from my package'
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[build-img]:https://github.com/ryansonshine/bns-resolver/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/ryansonshine/bns-resolver/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/bns-resolver
[downloads-url]:https://www.npmtrends.com/bns-resolver
[npm-img]:https://img.shields.io/npm/v/bns-resolver
[npm-url]:https://www.npmjs.com/package/bns-resolver
[issues-img]:https://img.shields.io/github/issues/ryansonshine/bns-resolver
[issues-url]:https://github.com/ryansonshine/bns-resolver/issues
[codecov-img]:https://codecov.io/gh/ryansonshine/bns-resolver/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/ryansonshine/bns-resolver
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
