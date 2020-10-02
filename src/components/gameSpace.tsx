import styled from "@emotion/styled";
import { css } from "@emotion/core";

import React from "react";

export interface Props {
  field?: string;
}

const BaseCell = css`
  width: 25px;
  height: 25px;
  border: 1px solid;
  display: inline-block;
  border-radius: 10px;
  line-height: 25px;
  text-align: center;
  margin: 5px;
  vertical-align: bottom;
`;

export const GameSpace: React.FC<Props> = ({ field }) => (
  <div>
    <h1>Текст</h1>
  </div>
);
