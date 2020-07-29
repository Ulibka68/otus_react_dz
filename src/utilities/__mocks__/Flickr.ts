// https://jestjs.io/docs/ru/es6-class-mocks

export default class Flickr {
  constructor(public tag: string) {}
  async *getPhotoUrlGenerator(): AsyncGenerator<string> {
    yield "https://farm66.staticflickr.com/65535/49999337211_53bf98f4b4_q.jpg";
    yield "https://farm66.staticflickr.com/65535/50000605583_4d5017bc31_q.jpg";
    yield "https://farm66.staticflickr.com/65535/50009671121_1ac61120f6_q.jpg";
  }
}

/*
export let mockFlickr = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return { Flickr: mockFlickr };
});

export default mock;

async function* getPhotoUrlGeneratorMock1() {
  yield "1";
}

// выдает генератор
mockFlickr.getPhotoUrlGenerator = getPhotoUrlGeneratorMock1;

mockFlickr.mockImplementation()
*/
