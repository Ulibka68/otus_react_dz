import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import SignupForm from "./FormParams";

export default {
  title: "SignupFormStory",
  decorators: [withKnobs],
};

// eslint-disable-next-line react/jsx-key
export const SignupFormStory = () => [<SignupForm />];
