// import React from "react";
// import { mount, shallow } from "enzyme";
// import FlickrContainer from "./FlickrContainer";
import Flickr from "../utilities/Flickr";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import picts from "../_ficstures/picts.json";

test("picts", async () => {
  // console.log(picts);
  const fl = new Flickr("1");
  const gen = fl.getPhotoUrlGenerator();
  const data = await gen.next();
  console.log(data.value);
});
