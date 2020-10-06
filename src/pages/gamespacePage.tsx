import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { connect, ConnectedProps } from "react-redux";
import { LifeGameRootState } from "@/redux/store";
import * as life from "@/modules/Life/state_logic_reducer";

const FlexWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const Btn = styled.button`
  margin-top: 20px;
`;

import { GameSpace } from "@/modules/Life/gameSpace";

class GameSpacePageClass extends React.Component<Props> {
  calcNextState = () => {
    this.props.nextState(null);
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <FlexWrapper>
          <GameSpace cellSize={20} showNeighbors={false} />
          <GameSpace cellSize={20} showNeighbors={true} />
        </FlexWrapper>

        <Btn onClick={this.calcNextState}>Следующее состояние</Btn>
      </div>
    );
  }
}

const connector = connect((state: LifeGameRootState) => state.lifeState, {
  caclNeighbors: life.caclNeighbors,
  nextState: life.nextState,
});

// The inferred type will look like:
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export const GameSpacePage = connector(GameSpacePageClass);
