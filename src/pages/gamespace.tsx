import React from "react";
import {lifeState} from "@/redux/state_logic";


import {GameSpace} from "@/components/gameSpace";


interface Props {
    sizex : number;
    sizey : number;
}

export const GameSpacePage : React.FC<Props> = ({ sizex,sizey }) => {
    const ls = new lifeState(sizex,sizey);
    ls.randomSeed(0.2);
    return(
    <GameSpace sizex={sizex} sizey ={sizey} cellsState={ls} />
)};