# atc

![](https://img.shields.io/npm/v/@wei-tools/atc)

A solution of catching async/await error.

## usage

```shell
# npm install @wei-tools/atc
```

```shell
# yarn add @wei-tools/atc
```

```javascript
import atc from '@wei-tools/atc';

const foo = async () => {
  let [reason, value] = await atc(Promise.resolve('value')); // undefined 'value'
  [reason, value] = await atc(Promise.reject('reason')); // 'reason' undefined
};
```
