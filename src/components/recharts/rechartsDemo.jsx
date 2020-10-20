/* eslint-disable react/no-multi-comp */
import React, { Component } from "react";
import {
  BarChart,
  Bar,
  Brush,
  Cell,
  CartesianGrid,
  ReferenceLine,
  ReferenceArea,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ErrorBar,
  LabelList,
  Rectangle,
} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import _ from "lodash";
import { changeNumberOfData } from "./utils";

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  {
    name: "food",
    uv: -2000,
    pv: -2013,
    amt: -4500,
    bmk: -4301,
    time: 1,
    uvError: [100, 50],
    pvError: [110, 20],
  },
  {
    name: "cosmetic",
    uv: 3300,
    pv: 2000,
    amt: 6500,
    bmk: 2000,
    time: 2,
    uvError: 120,
    pvError: 50,
  },
  {
    name: "storage",
    uv: 3200,
    pv: 1398,
    amt: 5000,
    bmk: 3000,
    time: 3,
    uvError: [120, 80],
    pvError: [200, 100],
  },
  {
    name: "digital",
    uv: 2800,
    pv: 2800,
    amt: 4000,
    bmk: 1500,
    time: 4,
    uvError: 100,
    pvError: 30,
  },
];

const data01 = [
  { day: "05-01", wether: "sunny" },
  { day: "05-02", wether: "sunny" },
  { day: "05-03", wether: "cloudy" },
  { day: "05-04", wether: "rain" },
  { day: "05-05", wether: "rain" },
  { day: "05-06", wether: "cloudy" },
  { day: "05-07", wether: "cloudy" },
  { day: "05-08", wether: "sunny" },
  { day: "05-09", wether: "sunny" },
];

const data02 = [
  { name: "201102", uv: -6.11, pv: 0 },
  { name: "201103", uv: 0.39, pv: 0 },
  { name: "201104", uv: -1.37, pv: 0 },
  { name: "201105", uv: 1.16, pv: 0 },
  { name: "201106", uv: 1.29, pv: 0 },
  { name: "201107", uv: 0.09, pv: 0 },
  { name: "201108", uv: 0.53, pv: 0 },
  { name: "201109", uv: 2.52, pv: 0 },
  { name: "201110", uv: 0.79, pv: 0 },
  { name: "201111", uv: 2.94, pv: 0 },
  { name: "201112", uv: 4.3, pv: 0 },
  { name: "201201", uv: 7.41, pv: 14.21 },
  { name: "201202", uv: -7.1, pv: 13.01 },
  { name: "201203", uv: -1.17, pv: 11.26 },
  { name: "201204", uv: -1.86, pv: 10.7 },
  { name: "201205", uv: -0.16, pv: 9.26 },
  { name: "201206", uv: -1.25, pv: 6.53 },
  { name: "201207", uv: 0.22, pv: 6.66 },
  { name: "201208", uv: 0.72, pv: 6.86 },
  { name: "201209", uv: 1.82, pv: 6.12 },
  { name: "201210", uv: 1.64, pv: 7.02 },
  { name: "201211", uv: 3.16, pv: 7.25 },
  { name: "201212", uv: 1.31, pv: 4.17 },
  { name: "201301", uv: 2.91, pv: -0.19 },
  { name: "201302", uv: -0.47, pv: 6.94 },
  { name: "201303", uv: -4.15, pv: 3.71 },
  { name: "201304", uv: -1.82, pv: 3.76 },
  { name: "201305", uv: -0.93, pv: 2.95 },
  { name: "201306", uv: -0.99, pv: 3.22 },
  { name: "201307", uv: -0.52, pv: 2.46 },
  { name: "201308", uv: 1.54, pv: 3.3 },
  { name: "201309", uv: 2.05, pv: 3.54 },
  { name: "201310", uv: 0.7, pv: 2.58 },
  { name: "201311", uv: 2.25, pv: 1.59 },
  { name: "201312", uv: 3.59, pv: 3.92 },
  { name: "201401", uv: 3.63, pv: 4.64 },
  { name: "201402", uv: -4.91, pv: -0.02 },
  { name: "201403", uv: -2.66, pv: 1.54 },
  { name: "201404", uv: -1.5, pv: 1.86 },
  { name: "201405", uv: -0.19, pv: 2.62 },
  { name: "201406", uv: -0.22, pv: 3.42 },
  { name: "201407", uv: -0.58, pv: 3.35 },
  { name: "201408", uv: 0.89, pv: 2.69 },
  { name: "201409", uv: 2.22, pv: 2.86 },
  { name: "201410", uv: 0.61, pv: 2.77 },
  { name: "201411", uv: 2.37, pv: 2.97 },
  { name: "201412", uv: 3.06, pv: 2.41 },
  { name: "201501", uv: 1.07, pv: -0.13 },
  { name: "201502", uv: 4.04, pv: 9.27 },
  { name: "201503", uv: -5.14, pv: 6.48 },
  { name: "201504", uv: -1.69, pv: 6.28 },
  { name: "201505", uv: 0.51, pv: 7.03 },
  { name: "201506", uv: 1.03, pv: 8.37 },
  { name: "201507", uv: -1.14, pv: 7.76 },
  { name: "201508", uv: 0.53, pv: 7.38 },
  { name: "201509", uv: 1.51, pv: 6.63 },
  { name: "201510", uv: -0.16, pv: 5.81 },
  { name: "201511", uv: 3.27, pv: 6.74 },
];

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
