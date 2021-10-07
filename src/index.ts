export type AtcResult<T> =
  | [reason: undefined, value: T]
  | [reason: any, value: undefined];

const atc = <T = any>(promise: Promise<T>): Promise<AtcResult<T>> =>
  promise.then(
    (value: T) => [undefined, value],
    (reason: any) => [reason, undefined]
  );

export default atc;
