// https://hackernoon.com/learn-advanced-typescript-4yl727e6

type Tail<T extends any[]> = ((...t: T) => any) extends (
  _: any,
  ...tail: infer TT
) => any
  ? TT
  : [];

// any ? TT : [];
// type Tail<T extends any[]> =
// ((...t: T) => any) extends ( _: any, ...tail: infer TT ) => any
//     ? TT : []

type test11 = Tail<[1, 2, string, number]>; // [2, string,number]
const a: test11 = [2, "a", 55];
//const b: test11 = [3, "a", 55]; // Error  Type '3' is not assignable to type '2'.

const fn00 = (name: string, age: number, single: boolean) => true;

type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;

type test12 = Tail<Parameters<typeof fn00>>; // [number, boolean]
const a12: test12 = [1, true];
//const a12_1: test12 = [1, 2]; // Error : Type 'number' is not assignable to type 'boolean'.

type HasTail<T extends any[]> = T extends [] | [any] ? false : true;

type params = [1, 2, string];
type test14 = HasTail<params>; // true
type test16 = HasTail<[string]>; // false

const a16: test16 = false;
const a14: test14 = true;

type ObjectInfer<O> = O extends { a: infer A } ? A : never;
const object = { a: "hello" };

type test17 = ObjectInfer<typeof object>; // string
const a17: test17 = "aa";
type test17_0 = { a: number[]; c: string };
// type test17_0 = number;
// type test17_0 = [number, string];
type test17_1 = ObjectInfer<test17_0>;
const a17_1: test17_1 = [45, 22];

type Last<T extends any[]> = { 0: Last<Tail<T>>; 1: Head<T> }[HasTail<
  T
> extends true
  ? 0
  : 1];

type test29 = Last<[1, 2, 3, string]>; //string
const a29: test29 = "a";

type Prepend<E, T extends any[]> = ((head: E, ...args: T) => any) extends (
  ...args: infer U
) => any
  ? U
  : T;

type test34 = Prepend<string, []>; // [string]
type test35 = Prepend<number, [1, 2]>; // [number,1,2]

const a34: test34 = ["a"];
const a35: test35 = [45, 1, 2];

type Last3<T extends any[]> = HasTail<T> extends true ? Last<Tail<T>> : Head<T>;

type Last2<T extends any[]> = HasTail<T> extends true
  ? Last2<Tail<T>>
  : Head<T>;

type test40 = Last2<[1, 2, 3, string]>; //string
const a40: test40 = "a";

type t41 = { a: string; b: number };
type t42 = t41["a"];
const a42: t42 = "a";
