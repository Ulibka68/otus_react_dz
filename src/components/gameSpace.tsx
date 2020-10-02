import { css } from '@emotion/core'
import styled from "@emotion/styled";
import React from "react";
import {lifeState} from "@/redux/state_logic";


export interface Props {
  sizex : number;
  sizey : number;
  cellsState : lifeState;
}

const GridWrapper = styled.div<{sizex : number}>`
   background: aqua;
   width: ${ ({sizex} ) => ( (sizex *11-1).toString()+'px' )};
`

const GrCont = styled.div<{sizex : number, sizey : number}>`
    display: grid;

    grid-template-columns: ${ ({sizex} ) =>  `repeat(${sizex},10px)` };
    grid-template-rows: ${ ({sizey} ) =>  `repeat(${sizey},10px)` };
    gap: 1px;
    
    div {
        background-color: beige;
        font-size: 10px;
        line-height: 8px;
        padding-left: 2px;
    }
`;

export const GameSpace: React.FC<Props> = ({ sizex,sizey,cellsState }) => {
    const size_total = sizex * sizey;
    const insideCell = [];
    for (let y = 0; y < sizey; y++) {
        for (let x = 0; x < sizex; x++) {
            insideCell.push(
                <div key={`${x}_${y}`} data-xy={`${x}_${y}`}>
                    {cellsState.state[y][x] ? 'o' : ''}
                </div>
            );
        }
    }

  return (
      <GridWrapper sizex={sizex}>
          <GrCont sizex={sizex} sizey = {sizey}>
            { insideCell}
          </GrCont>
      </GridWrapper>
)};
