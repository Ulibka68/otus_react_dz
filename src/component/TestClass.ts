import { number } from "@storybook/addon-knobs";

export default class TestClass {
  getRandomNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 100));
      }, 100);
    });
  }
  Plus(a: number): number {
    return a + 2;
  }
}
