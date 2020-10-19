import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { connect, ConnectedProps } from "react-redux";
import { LifeGameRootState } from "@/redux/store";
import * as life from "@/modules/Life";

const FlexWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const Btn = styled.button`
  margin-top: 20px;
`;

import { GameSpace } from "@/modules/Life/gameSpace";
import { DynamicModuleLoader } from "redux-dynamic-modules";

class GameSpacePageClass extends React.Component<Props> {
  calcNextState = () => {
    this.props.nextState(null);
    // this.forceUpdate();
  };

  startTimerSaga = () => {
    this.props.startTimer();
  };

  stopTimerSaga = () => {
    this.props.stopTimer();
  };

  componentWillUnmount() {
    this.stopTimerSaga();
  }

  render() {
    return (
      <DynamicModuleLoader modules={[life.getLifeModule()]}>
        <div>
          <FlexWrapper>
            <GameSpace cellSize={20} showNeighbors={false} />
            <GameSpace cellSize={20} showNeighbors={true} />
          </FlexWrapper>

          <Btn onClick={this.calcNextState}>Следующее состояние</Btn>
          <Btn onClick={this.startTimerSaga}>Запустить таймер</Btn>
          <Btn onClick={this.stopTimerSaga}>Остановить таймер</Btn>
        </div>
      </DynamicModuleLoader>
    );
  }
}

const connector = connect(
  ({ lifeState = life.defaultlifeState }: LifeGameRootState) => lifeState,

  {
    caclNeighbors: life.caclNeighbors,
    nextState: life.nextState,
    stopTimer: life.stopTimer,
    startTimer: life.startTimer,
  }
);

// The inferred type will look like:
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export const GameSpacePage = connector(GameSpacePageClass);
