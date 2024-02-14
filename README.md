<h1 align="center" style="border-bottom: none;">🚀🚀 xype-resolver 🚀🚀</h1>
<h3 align="center">XYPE Domain Name Resolver Library</h3>

[![npm latest version][npm-img]][npm-url]
[![npm ethers-v5 version][npm-img-ethersV5]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

## Install

```bash
npm install xype-resolver
```

## Usage

### Import and initialization

```ts
import { XypeResolver } from 'xype-resolver';

const xypeResolver = await XypeResolver.init(RPC_NODE);
```

### Name resolution

- This function should be used when the input is a human readable name or alias like `alex.sxt`. The sample code:

```ts
const addr = await xypeResolver.resolveName('alex.sxt');
```

### Lookup the address

- This function performs reverse resolution returning the primary alias of the given address. Typically it is used when the Ethereum account is connected to the dApp. The sample code:

```ts
const addr = await xypeResolver.lookupAddress(
  '0x084B5B4967b6EaB4EeDc628C12c7E63292cD5FC6'
);
```

## Running tests

```shell
npm run test
```

## Publish package

There are two supported versions of this package depending on version of ethers.js (v5 and v6):

- Publish ethers-v5 version `xype-resolver@ethers-v5`:
```shell
npm publish --tag ethers-v5
```

- Publish ethers-v6 version `xype-resolver@latest`:
```shell
npm publish --tag latest
```

[build-img]: https://github.com/Syndika-Corp/xype-resolver/actions/workflows/build.yml/badge.svg
[build-url]: https://github.com/Syndika-Corp/xype-resolver/actions/workflows/build.yml
[downloads-img]: https://img.shields.io/npm/dt/xype-resolver
[downloads-url]: https://www.npmtrends.com/xype-resolver
[npm-img]: https://img.shields.io/npm/v/xype-resolver/latest.svg
[npm-img-ethersV5]: https://img.shields.io/npm/v/xype-resolver/ethers-v5.svg
[npm-url]: https://www.npmjs.com/package/xype-resolver
[npm-img-ethersV5]: https://img.shields.io/npm/v/xype-resolver
[npm-url-ethersV5]: https://www.npmjs.com/package/xype-resolver
[issues-img]: https://img.shields.io/github/issues/Syndika-Corp/xype-resolver
[issues-url]: https://github.com/Syndika-Corp/xype-resolver/issues
[codecov-img]: https://codecov.io/gh/Syndika-Corp/xype-resolver/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/Syndika-Corp/xype-resolver
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
