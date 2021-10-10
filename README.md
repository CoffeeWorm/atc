# atc

A solution of async/await error catch.

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
