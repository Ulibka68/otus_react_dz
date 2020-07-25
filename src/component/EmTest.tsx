import React, { FC } from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// Set the jsx pragma at the top of your source file that uses the css prop
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const color = "white";

const danger = css`
  color: red;
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

export default class EmTest extends React.Component<any, any> {
  constructor(props?: any) {
    super(null);
  }

  render() {
    return (
      <div>
        <div
          css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: ${color};
            }
          `}
        >
          Hover to change color.
        </div>

        <div css={base}>This will be turquoise</div>
        <div css={[danger, base]}>
          This will be also be turquoise since the base styles overwrite the
          danger styles.
        </div>
        <div css={[base, danger]}>This will be red</div>
      </div>
    );
  }
}
