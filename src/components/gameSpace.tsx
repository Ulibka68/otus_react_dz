/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import React from "react";

export interface Props {
  sizex : number;
  sizey : number;
}

const gridWrapper = css`
    background: aqua;
    width: calc(4 * 10px + (4 - 1) * 1px);
`;

const grCont = css`
    display: grid;

    grid-template-columns: repeat(4,10px);
    grid-template-rows: repeat(4,10px);
    gap: 1px;
    
    div {
        background-color: beige;
        font-size: 10px;
        line-height: 8px;
        padding-left: 2px;
    }
`;

const grCont_div = css`
    background-color: beige;
    font-size: 10px;
    line-height: 8px;
    padding-left: 2px;
`;

export const GameSpace: React.FC<Props> = ({ sizex,sizey }) => (
    <div css={gridWrapper}>
        <div css={grCont}>
            <div>o</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>o</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>

        </div>
    </div>
);
