# atc

A solution of async/await error catch.

## usage

```shell
# npm install @coffee/atc
```

```shell
# yarn add @coffee/atc
```

```javascript
import atc from '@coffee/atc';

const foo = async () => {
  const [reason, value] = await atc(Promise.resolve('value')); // undefined 'value'
  const [reason, value] = await atc(Promise.reject('reason')); // 'reason' undefined
};
```
