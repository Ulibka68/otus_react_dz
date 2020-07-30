import Flickr from "../utilities/Flickr";

// automock всего класса
// https://jestjs.io/docs/en/es6-class-mocks#manual-mock-that-is-another-es6-class
//
// Calling jest.mock(../utilities/Flickr) returns a useful "automatic mock" you can use to spy on calls to the class constructor and all of its methods.
// It replaces the ES6 class with a mock constructor,
// and replaces all of its methods with mock functions that always return undefined.
// Method calls are saved in theAutomaticMock.mock.instances[index].methodName.mock.calls.
jest.mock("../utilities/Flickr");

describe("Подготовка генератора", () => {
  test("Тест мока генератора", async () => {
    // console.log(picts);

    beforeEach(() => {
      // должен вернуть асинхронный  генератор
      (Flickr as jest.Mock).mockImplementation(() => ({
        getPhotoUrlGenerator: () =>
          async function* () {
            yield 1;
            yield 2;
          },
      }));
    });

    const fl = new Flickr("1");
    const gen = fl.getPhotoUrlGenerator();
    const data = await gen.next();
    console.log(data);
  });
});
