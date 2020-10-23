/* eslint-disable react/no-multi-comp */
import React, { Component } from "react";
import {
  BarChart,
  Bar,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import _ from "lodash";
import { changeNumberOfData } from "./utils";
import dataJson from "./rechartsDemoData.json";

const colors = scaleOrdinal(schemeCategory10).range();

const data = dataJson.data;

const data01 = dataJson.data01;

const data02 = dataJson.data02;

const rangeData = [
  { day: "05-01", temperature: [-1, 10] },
  { day: "05-02", temperature: [2, 15] },
  { day: "05-03", temperature: [3, 12] },
  { day: "05-04", temperature: [4, 12] },
  { day: "05-05", temperature: [12, 16] },
  { day: "05-06", temperature: [5, 16] },
  { day: "05-07", temperature: [3, 12] },
  { day: "05-08", temperature: [0, 8] },
  { day: "05-09", temperature: [-3, 5] },
];

const pageData = [
  { name: "Page A", uv: 300, pv: 2600, amt: 3400 },
  { name: "Page B", uv: 400, pv: 4367, amt: 6400 },
  { name: "Page C", uv: 300, pv: 1398, amt: 2400 },
  { name: "Page D", uv: 200, pv: 9800, amt: 2400 },
  { name: "Page E", uv: 278, pv: 3908, amt: 2400 },
  { name: "Page F", uv: 189, pv: 4800, amt: 2400 },
  { name: "Page G", uv: 189, pv: 4800, amt: 2400 },
];

const initialState = {
  data,
  data01,
  data02,
};

// eslint-disable-next-line no-restricted-syntax
export default class Demo extends Component {
  static displayName = "BarChartDemo";

  state = initialState;

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  handlePvBarClick = (data, index, e) => {
    console.log(`Pv Bar (${index}) Click: `, data);
  };

  handleBarAnimationStart = () => {
    console.log("Animation start");
  };

  handleBarAnimationEnd = () => {
    console.log("Animation end");
  };

  handleMoreData = () => {
    const { data } = this.state;
    const count = data.length;
    console.log(count);

    this.setState({
      data: [
        ...data,
        ..._.range(1 + Math.ceil(data.length * Math.random())).map(
          (entry, index) => {
            console.log(index);
            return {
              name: `random${Math.random()}`.slice(0, 10),
              uv: 3000 * Math.random(),
              pv: 3000 * Math.random(),
              amt: 5000 * Math.random(),
              time: count + index,
              uvError: 100 * Math.random(),
              pvError: 50 * Math.random(),
            };
          }
        ),
      ],
    });
  };

  handleLessData = () => {
    const { data } = this.state;

    this.setState({
      data: data.slice(0, Math.ceil(data.length * Math.random())),
    });
  };

  render() {
    const { data, data01, data02 } = this.state;

    return (
      <div className="bar-charts">
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a>
        <br />

        <p>Simple BarChart (Click on rectangles and open console )</p>
        <p>
          <a onClick={this.handleMoreData}>more data</a>
          <span style={{ margin: "0 20px" }}>|</span>
          <a onClick={this.handleLessData}>less data</a>
        </p>
        <div className="bar-chart-wrapper" style={{ textAlign: "right" }}>
          <BarChart
            width={400}
            height={400}
            data={data}
            onClick={this.handlePvBarClick}
          >
            <XAxis dataKey="name" />
            <YAxis yAxisId="a" />
            <YAxis yAxisId="b" orientation="right" />
            <Legend />
            <Tooltip />
            <CartesianGrid vertical={false} />
            <Bar
              yAxisId="a"
              dataKey="uv"
              onAnimationStart={this.handleBarAnimationStart}
              onAnimationEnd={this.handleBarAnimationEnd}
            >
              <LabelList fill="#000" angle={-45} />
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
            <Bar yAxisId="b" dataKey="pv" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    );
  }
}
