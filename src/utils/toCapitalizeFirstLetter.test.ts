import toCapitalizeFirstLetter from "./toCapitalizeFirstLetter";

describe('toCapitalizeFirstLetter', () => {
  test('Должна принять строку и на выходе получить эту же строку только с заглавной буквы', () => {
    const sentence = toCapitalizeFirstLetter('balbasaur');
    expect(sentence).toEqual('Balbasaur');
  });
});