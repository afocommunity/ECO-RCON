
# ECO RCON Interface

![npm](https://img.shields.io/npm/dw/@eco.js/rcon) ![GitHub Sponsors](https://img.shields.io/github/sponsors/bombitmanbomb) [![GitHub issues](https://img.shields.io/github/issues/Ecojs/Rcon)](https://github.com/Ecojs/Rcon/issues) ![GitHub](https://img.shields.io/badge/license-MIT-brightgreen) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@eco.js/rcon) [![Codacy grade](https://img.shields.io/codacy/grade/bc777618c71e42fb87caae1c0c970327?logo=codacy)](https://www.codacy.com/gh/Ecojs/Rcon/dashboard?utm_source=github.com&utm_medium=referral&utm_content=Ecojs/Rcon&utm_campaign=Badge_Grade) ![GitHub](https://img.shields.io/badge/node->=16.0.0-brightgreen) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Ecojs/Rcon)

![GitHub package.json version](https://img.shields.io/github/package-json/v/Ecojs/Rcon) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Ecojs/Rcon)

[Our Discord](https://discord.gg/uzeWjVTPSQ)

# Installation

NPM

```bash
npm install @eco.js/rcon
```

YARN

```bash
yarn add @eco.js/rcon
```

# Documentation

Documentation can be found [HERE](https://ecojs.github.io/Rcon/modules.html)

![Docs](https://img.shields.io/website?down_color=red&down_message=offline&up_color=brightgreen&up_message=online&url=https://ecojs.github.io/Rcon/%2Fmodules.html)

# Usage

```ts
// Example Usage that bans all players with a given word or phrase in their name.
import { ECO } from '@eco.js/rcon';

const myServer = new ECO('127.0.0.1', 8000, 'mypassword');

await myServer.onReady;

const response = await myServer.send('kick snow_e,You have been kicked');

```
