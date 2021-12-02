<div align="center">

# 🌙 `@ricardo-jrm/string-truncate`

<b>Truncate strings</b>

![build](https://img.shields.io/github/workflow/status/ricardo-jrm/string-truncate/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardo-jrm/string-truncate?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardo--jrm)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardo-jrm/string-truncate?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardo-jrm/string-truncate?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardo-jrm/string-truncate?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardo-jrm/string-truncate

yarn add @ricardo-jrm/string-truncate
```

<br />

### <b>Usage</b>

Truncates string to fit within given length with appended ellipsis. Option to keep last word.

```ts
import { stringTruncate } from '@ricardo-jrm/string-truncate'

stringTruncate('Lorem ipsum dolor sit amet', 20);
-> "Lorem ipsum dolor..."

stringTruncate('Lorem ipsum dolor sit amet', 20, lastWord);
-> "Lorem ipsum ... amet"
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardo-jrm/string-truncate/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardo-jrm](https://github.com/ricardo-jrm))

<br />
