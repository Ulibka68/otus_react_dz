import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { makeCounter3, InjectedCounterProps } from "./makeCounter_render_prop3";
import { CounterProps } from "./makeCounter_render_prop";

export default {
  title: "HOC",
  decorators: [withKnobs],
};

const Component1 = (props: InjectedCounterProps) => (
  <div>
    <button onClick={props.onDecrement}> - </button>
    {props.value}
    <button onClick={props.onIncrement}> + </button>
  </div>
);

const Counter3 = makeCounter3(Component1);

export const makeCounter_render_prop3 = () => [
  <Counter3 minValue={1} maxValue={10} initialValue={3} key={1} />,
  <div>
    <h1>-----</h1>
  </div>,
  <Counter3 minValue={1} maxValue={10} key={2} />,
];
