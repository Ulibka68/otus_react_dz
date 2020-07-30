import TestClass from "./TestClass";
jest.mock("./TestClass");
describe("TestClass", () => {
  beforeEach(() => {
    (TestClass as jest.Mock).mockImplementation(() => ({
      getRandomNumber: () => Promise.resolve(-5),
    }));
  });
  it(".getRandomNumber resolved with -5", async () => {
    expect(await new TestClass().getRandomNumber()).toEqual(-5);
  });
});
