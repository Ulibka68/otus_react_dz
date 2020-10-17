import React from "react";
import styled from "@emotion/styled";
import { connect, ConnectedProps } from "react-redux";
import { LifeGameRootState } from "@/redux/store";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getCahnelsWindowModule } from "./chanelsWindowModule";
import { cInitialState } from "./chanelsWindowReducer";

const ChanelWrapper = styled.div<{ bacgroundColor: string }>`
  background: ${({ bacgroundColor }) => bacgroundColor};
  width: 400px;
  height: 60px;
`;

class ChanelsWindowClass extends React.Component<Props, any> {
  clickHandler = (evt: React.SyntheticEvent) => {
    console.log(evt);
    // evt.preventDefault();
    evt.stopPropagation();
  };

  render() {
    return (
      <DynamicModuleLoader modules={[getCahnelsWindowModule()]}>
        <ChanelWrapper
          bacgroundColor={this.props.backgroundColor}
          onClick={this.clickHandler}
        >
          ChanelsWindow заготовка
        </ChanelWrapper>
      </DynamicModuleLoader>
    );
  }
}

const connector = connect((state: LifeGameRootState) => {
  if (!state.chanelWindowState) {
    //  так делать нельзя почему то state.chanelWindowState === undefined на начальном этапе
    state.chanelWindowState = cInitialState;
  }

  return state.chanelWindowState;
});

// The inferred type will look like:
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export const ChanelsWindow = connector(ChanelsWindowClass);
