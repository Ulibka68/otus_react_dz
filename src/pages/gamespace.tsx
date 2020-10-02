import React from "react";


import {GameSpace, Props} from "@/components/gameSpace";

export const GameSpacePage : React.FC<Props> = ({ sizex,sizey }) => (
    <GameSpace sizex={sizex} sizey ={sizey}/>
);