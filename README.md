# WDIO 9 Minimal Reproducible Example

`browser.throttleNetwork()` no longer works in WDIO 9.

```bash
Error: Couldn't import "puppeteer-core"! Do you have it installed? If not run "npm install puppeteer-core"!
    at async Context.<anonymous> (/Users/ianrenauld/dev/wdio9/tests/simple.spec.ts:3:7)
```

To reproduce:

```bash
npx wdio --spec tests/simple.spec.ts
```
