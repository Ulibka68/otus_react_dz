import React from "react";
import FlickrImg from "./FlickrImg";
import Flickr from "../utilities/Flickr";

interface IState {
  urlSet: string[];
  tag: string;
}

interface IProps {
  cntImages: number;
  intervalEachPicture: number;
}

class FlickrContainer extends React.Component<IProps, IState> {
  fl: Flickr;
  timerHndlr: number;
  flickrUrlGeneretator: AsyncGenerator<string> | null;

  public static defaultProps: Partial<IProps> = {
    intervalEachPicture: 100,
    cntImages: 200,
  };

  constructor(props: IProps) {
    super(props);
    // this.setState({ urlSet: [] });
    this.fl = new Flickr("cats");
    this.timerHndlr = 0;
    this.flickrUrlGeneretator = null;
  }

  componentDidMount() {
    //    получить новую картинку раз в секунду
    this.setState({ urlSet: [] });
    this.timerHndlr = window.setInterval(
      this.newPict,
      this.props.intervalEachPicture
    );
    this.flickrUrlGeneretator = this.fl.getPhotoUrlGenerator();
  }

  componentWillUnmount() {
    if (this.timerHndlr !== 0) window.clearInterval(this.timerHndlr);
  }

  componentDidUpdate(prevProps: any, prevState: IState) {
    if (prevState && prevState.urlSet.length > 100 && this.fl.tag !== "dogs") {
      this.fl.tag = "dogs";
      this.setState({ tag: "dogs" });
    }
  }

  shouldComponentUpdate(nextProps: any, nextState: IState) {
    return nextState != null;
  }

  newPict = () => {
    // получить еще одну картинку
    if (this.state.urlSet.length > this.props.cntImages) {
      if (this.timerHndlr !== 0) window.clearInterval(this.timerHndlr);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.flickrUrlGeneretator.next().then((data) => {
      console.log(data.value);
      this.state
        ? this.setState(
            (prevState: Readonly<IState>, props: Readonly<any>) => ({
              urlSet: [...prevState.urlSet, data.value],
            })
          )
        : this.setState({ urlSet: [data.value] });
    });
  };

  render() {
    return (
      <div>
        {this.state
          ? this.state.urlSet.map((value, index) => (
              <FlickrImg
                imgDesc={index.toString()}
                imgUrl={value}
                key={index}
              />
            ))
          : "Загрузка"}
      </div>
    );
  }
}

export default FlickrContainer;
