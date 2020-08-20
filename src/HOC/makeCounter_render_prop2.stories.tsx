import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { WrappedCounter} from "./makeCounter_render_prop2";


export default {
  title: "HOC",
  decorators: [withKnobs],
};

export const makeCounter_render_prop2 = () => [
  <WrappedCounter maxValue={10} minValue={1} initialValue={3} />,
];
