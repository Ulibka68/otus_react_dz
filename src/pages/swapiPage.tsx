import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { swapiPeopleSlice, fetchPeoples } from "@/futures/swapi/swapiReducer";
import { RootStateType } from "@/redux/reducer/index";
import { JsonView } from "@/futures/swapi/swapiPeople";

const mapStateToProps = (state: RootStateType) => ({ swapi: state.swapi });

const mapDispatchToProps = {
  fetchPeoples,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  backgroundColor: string;
};

class SwapiPageL extends React.Component<Props> {
  fetchPeoples = () => {
    console.log("fetch");
    this.props.fetchPeoples(0);
  };
  render() {
    return (
      <div>
        <h1>SWAPI получить людей из Star Wars</h1>
        <h2> {this.props.swapi.loading}</h2>
        <button onClick={this.fetchPeoples}> Запросить </button>
        <div>
          {this.props.swapi.loading === "fulfilled" &&
            this.props.swapi.peoples.map((current) => (
              <JsonView objJson={current} key={current.url} />
            ))}
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line no-restricted-syntax
export default connector(SwapiPageL);
