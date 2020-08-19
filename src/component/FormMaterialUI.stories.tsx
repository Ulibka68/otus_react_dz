import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import FormMaterialUI from "./FormMaterialUI";
import FormMaterialUI2 from "./FormMaterialUI2";
// import FormMaterialUI3 from "./FormMaterialUI3";

export default {
  title: "SignupFormStory",
  decorators: [withKnobs],
};

// eslint-disable-next-line react/jsx-key
export const FormMaterialUId = () => [<FormMaterialUI />];
export const FormMaterialUId2d = () => [<FormMaterialUI2 />];
// export const FormMaterialUId3 = () => [<FormMaterialUI3 />];
