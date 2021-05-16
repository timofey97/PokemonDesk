// // ## Работа с простыми типами
// // Напиши тип функции, конкатенирующей две строки

// function concat(firstSt: string, secondSt: string): string {
//   return firstSt + secondSt;
// }

// concat('Hello ', 'World');

// // ## Работа с интерфейсами
// // Напиши интерфейс для описания следующих данных

// interface intHome {
//   howIDoIt: string;
//   simeArray?: (string | number)[] | null;
//   withData?: WithDataEntity[] | null;
// }

// interface WithDataEntity {
//   howIDoIt: string;
//   simeArray?: (string | number)[] | null;
// }

// const myHometask: intHome = {
//   howIDoIt: 'I Do It Wel',
//   simeArray: ['string one', 'string two', 42],
//   withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
// };

// // ## Типизация функций, используя Generic
// // В уроке про Generics мы написали интерфейс массива MyArray...
// // Добавь типизацию для метода reduce

// // interface MyArray<T> {
// //   [N: number]: T;

// //   reduce<U>(fn: (previousValue: T, currentValue: T, currentIndex: T, array: Int8Array) => U, initialValue?: U): U;
// // }

// // const tsArr: MyArray<number> = [1, 2, 3, 4];

// // tsArr.reduce((i, a) => a + i);
