import TestClass from "./TestClass";
jest.mock("./TestClass");
describe("TestClass test examples", () => {
  beforeAll(() => {
    (TestClass as jest.Mock).mockImplementation(() => ({
      getRandomNumber: () => Promise.resolve(-5),
      Plus: (a: number) => a + 5,
    }));
  });

  test(".getRandomNumber resolved with -5", async () => {
    expect(await new TestClass().getRandomNumber()).toEqual(-5);
  });

  test("getRandomNumber ver 2 resolved with -5", async () => {
    const t = new TestClass();
    const k = await t.getRandomNumber();
    expect(k).toEqual(-5);
    expect(t.Plus(2)).toBe(7);
  });

  test("", () => {
    const myMockFn = jest
      .fn(() => "default")
      .mockName("myMockFn")
      .mockImplementationOnce(() => "first call")
      .mockImplementationOnce(() => "second call")
      .mockReturnValueOnce("mockReturnValueOnce");

    // 'first call', 'second call', 'mockReturnValueOnce', 'default'
    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
  });
});
