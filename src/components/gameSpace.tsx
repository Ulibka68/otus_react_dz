import { css } from '@emotion/core'
import styled from "@emotion/styled";
import React from "react";
import {lifeState} from "@/redux/state_logic";


export interface Props {
  sizex : number;
  sizey : number;
  cellSize : number;
  showNeighbors : boolean;
  cellsState : lifeState;
}

const GridWrapper = styled.div<{sizex : number, cellSize : number}>`
   background: aqua;
   width: ${ ({sizex,cellSize} ) => ( (sizex *(cellSize+1)-1).toString()+'px' )};
`

const GrCont = styled.div<{sizex : number, sizey : number, cellSize : number}>`
    display: grid;

    grid-template-columns: ${ ({sizex,cellSize} ) =>  `repeat(${sizex},${cellSize}px)` };
    grid-template-rows: ${ ({sizey,cellSize} ) =>  `repeat(${sizey},${cellSize}px)` };
    gap: 1px;
    
    div {
        background-color: beige;
        font-size: ${ ({cellSize} ) =>  `${cellSize}px` };
        line-height: ${ ({cellSize} ) =>  `${cellSize-2}px` };
        text-align: center;
    }
`;

export const GameSpace: React.FC<Props> = ({ sizex,sizey,cellSize,showNeighbors,cellsState }) => {
    const size_total = sizex * sizey;
    const insideCell = [];
    for (let y = 0; y < sizey; y++) {
        for (let x = 0; x < sizex; x++) {
            insideCell.push(
                <div key={`${x}_${y}`} data-xy={`${x}_${y}`}>
                    { showNeighbors ? cellsState.neighbors[y][x] : cellsState.state[y][x] ? 'o' : ''}
                </div>
            );
        }
    }

  return (
      <GridWrapper sizex={sizex} cellSize={cellSize}>
          <GrCont sizex={sizex} sizey = {sizey} cellSize={cellSize}>
            { insideCell}
          </GrCont>
      </GridWrapper>
)};
