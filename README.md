# WDIO 9 Minimal Reproducible Example

I found out that in WDIO 9.4.3 the CLI command got somewhat broken: it now requires you to specify the `wdio.conf.ts` config file on the CL. It seems to now default to `wdio.conf.js` instead, giving the following error:

```bash
ERROR @wdio/config:ConfigParser: Failed loading configuration file: file:///Users/ianrenauld/dev/wdio9/wdio.conf.js: Cannot find module '/Users/ianrenauld/dev/wdio9/wdio.conf.js' imported from /Users/ianrenauld/dev/wdio9/node_modules/@wdio/config/build/node/index.js
```

Version 9.4.2 correctly (according to me) defaults to `wdio.conf.ts`

To reproduce:

```bash
npx wdio --spec tests/simple.spec.ts
```

Workaround:

```bash
npx wdio wdio.conf.ts --spec tests/simple.spec.ts
```

To see previous (working behavior), change `package.json` and set the `wdio-cli` line to this:

```bash
    "@wdio/cli": "9.4.2",
```

Do `npm install` and try running again without specifying the config file.
