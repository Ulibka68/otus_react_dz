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

  // всегда возвращает promise
  async *getPhotoUrlGenerator(): AsyncGenerator<string> {
    let pageIndex = 0;
    let cache: string[] = [];

    while (true) {
      if (cache.length === 0) {
        //  заполнить буфер
        cache = await this.getPage(pageIndex);
        pageIndex++;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      yield cache.pop();
    }
  }

  getPhotoUrlTest() {
    const generator = this.getPhotoUrlGenerator();

    for (let i = 1; i < 45; i++) {
      generator.next().then((data) => {
        console.log(data.value);
      });
    }
  }
}
