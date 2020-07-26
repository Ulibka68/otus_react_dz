import GetApiKey from "./GetApiKey";
import { number } from "@storybook/addon-knobs";

export default class Flickr {
  constructor(public tag: string) {}

  // получить страницу с 20 данными по фотографиям
  // возвращает Promice который разрешается в массив ссылок
  getPage(page: number): Promise<string[]> {
    const apiKey = GetApiKey();

    // online пример как применяются параметры при вызове лежит тут:
    // https://www.flickr.com/services/api/explore/flickr.photos.search
    // Документация по api лежит тут:
    // https://www.flickr.com/services/api/

    return (
      fetch(
        "https://api.flickr.com/services/rest/" +
          "?method=flickr.photos.search" +
          "&api_key=" +
          apiKey +
          "&page=" +
          page +
          "&per_page=20" +
          "&tags=" +
          this.tag +
          // '&text=' + tag +
          "&content_type=1" +
          "&sort=relevance" +
          "&in_gallery=true" +
          // '&is_commons=true'+
          "&tag_mode=AND" +
          "&format=json" +
          "&nojsoncallback=1"
      )
        .then((response) => response.json())
        .then((body) => {
          // console.log(body.photos.photo);
          // Возвращает массив следующего вида:
          // farm: 66
          // id: "50145526152"
          // isfamily: 0
          // isfriend: 0
          // ispublic: 1
          // owner: "70139913@N02"
          // secret: "b7ce849d22"
          // server: "65535"
          // title: "So viel Spaß kann Fell machen"

          return body.photos.photo;
        })
        //  после того как получен массив с данными по фотографиями получим из них ссылки
        .then((photos) =>
          photos.map(
            (photo: {
              farm: string;
              server: string;
              id: string;
              secret: string;
            }) =>
              `https://farm${photo.farm}.staticflickr.com/` +
              `${photo.server}/${photo.id}_${photo.secret}_q.jpg`
          )
        )
    );
  }

  // итератор
  [Symbol.asyncIterator]() {
    return {
      current: 1,
      last: 5,

      // next() вызывается на каждой итерации цикла for await..of
      async next() {
        // (2)
        // должен возвращать значение как объект {done:.., value :...}
        // (автоматически оборачивается в промис с помощью async)

        // можно использовать await внутри для асинхронности:
        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  }

  *generateSequence() {
    let value = 1;
    while (true) {
      const val1 = yield value;
      value = val1 === undefined ? value + 1 : val1;
    }
  }

  generateSequenceTest() {
    const generator = this.generateSequence();
    console.log(generator.next());
    console.log(generator.next(10));
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next(2));
    console.log(generator.next());
  }

  async scroll() {
    for await (const value of this) {
      console.log(value); // 1,2,3,4,5
    }
  }
}
