import React, { FC } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import style from "./FlickrImg.css";

interface FlickrImgProps {
  imgUrl: string;
  imgDesc: string;
}

const FlickrImg: React.FC<FlickrImgProps> = ({ imgUrl, imgDesc }) => (
  <div className={style.imgContainer}>
    <img src={imgUrl} />
    <p className={style.imgDesc}>{imgDesc}</p>
  </div>
);

export default FlickrImg;
