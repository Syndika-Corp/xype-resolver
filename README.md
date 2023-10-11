
# bns-resolver

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> The Blockprime Name Resolver Library

## Install

```bash
npm install bns-resolver
```

## Usage

### Import and initialization

```ts
import { BnsResolver } from "bns-resolver";

const bnsResolver = await BnsResolver.init(RPC_NODE);
```
### Name resolution

- This function should be used when the input is a human readable name or alias like `alex.sxt`. The sample code: 
```ts
const addr = await bnsResolver.resolveName('alex.sxt');
```

### Lookup the address

- This function performs reverse resolution returning the primary alias of the given address. Typically it is used when the Ethereum account is connected to the dApp. The sample code: 
```ts
const addr = await bnsResolver.lookupAddress('0x084B5B4967b6EaB4EeDc628C12c7E63292cD5FC6');
```

## Running tests

```shell
npm run test
```

[build-img]:https://github.com/Syndika-Corp/bns-resolver/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/Syndika-Corp/bns-resolver/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/bns-resolver
[downloads-url]:https://www.npmtrends.com/bns-resolver
[npm-img]:https://img.shields.io/npm/v/bns-resolver
[npm-url]:https://www.npmjs.com/package/bns-resolver
[issues-img]:https://img.shields.io/github/issues/Syndika-Corp/bns-resolver
[issues-url]:https://github.com/Syndika-Corp/bns-resolver/issues
[codecov-img]:https://codecov.io/gh/Syndika-Corp/bns-resolver/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/Syndika-Corp/bns-resolver
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
