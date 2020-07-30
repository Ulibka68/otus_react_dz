export default class TestClass {
  getRandomNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 100));
      }, 100);
    });
  }
}
