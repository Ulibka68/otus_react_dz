import React from "react";
import { lifeState } from "@/redux/state_logic";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootState } from "@/redux/reducer/index";
import * as life from "@/redux/reducer/state_logic_reducer";

const FlexWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const Btn = styled.button`
  margin-top: 20px;
`;

import { GameSpace } from "@/components/gameSpace";

interface Props {
  sizex: number;
  sizey: number;
  ls: lifeState;
}

export class GameSpacePage extends React.Component<Props> {
  calcNextState = () => {
    const { ls } = this.props;
    ls.nextState();
    ls.caclNeighbors();
    this.forceUpdate();
  };

  render() {
    const { sizex, sizey, ls } = this.props;
    return (
      <div>
        <FlexWrapper>
          <GameSpace
            sizex={sizex}
            sizey={sizey}
            cellsState={ls}
            cellSize={20}
            showNeighbors={false}
          />
          <GameSpace
            sizex={sizex}
            sizey={sizey}
            cellsState={ls}
            cellSize={20}
            showNeighbors={true}
          />
        </FlexWrapper>

        <Btn onClick={this.calcNextState}>Следующее состояние</Btn>
      </div>
    );
  }
}

export const GameSpacePageRedux = connect(
  (state: RootState) => state.lifeState,
  { caclNeighbors: life.caclNeighbors, nextState: life.nextState }
)(GameSpacePage);
