<div align="center">

# 🌙 `@ricardojrmcom/string-truncate`

<b>Truncate strings</b>

![build](https://img.shields.io/github/workflow/status/ricardojrmcom/string-truncate/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardojrmcom/string-truncate?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardojrmcom)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardojrmcom/string-truncate?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardojrmcom/string-truncate?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardojrmcom/string-truncate?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardojrmcom/string-truncate

yarn add @ricardojrmcom/string-truncate
```

<br />

### <b>Usage</b>

Truncates string to fit within given length with appended ellipsis. Option to keep last word.

```ts
import { stringTruncate } from '@ricardojrmcom/string-truncate'

stringTruncate('Lorem ipsum dolor sit amet', 20);
-> "Lorem ipsum dolor..."

stringTruncate('Lorem ipsum dolor sit amet', 20, true);
-> "Lorem ipsum ... amet"
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardojrmcom/string-truncate/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardojrmcom](https://github.com/ricardojrmcom))

Bootstrapped with 🟪[@ricardojrmcom/nova](https://github.com/ricardojrmcom/nova)

<br />
