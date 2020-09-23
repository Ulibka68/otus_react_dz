/** @jsx jsx */
import React from "react";

// import styled from "@emotion/styled";
// import { css } from "@emotion/core";

import { jsx } from "@emotion/core";

const Box: React.FC = ({ children }) => (
  <div
    css={{
      padding: 8,
      margin: 8,
      border: "1px solid cornflowerblue",
      backgroundColor: "lightgrey",
    }}
  >
    {children}
  </div>
);

export const JsonView: React.FC<{ objJson: any }> = ({ objJson }) => (
  <Box>
    <pre>{JSON.stringify(objJson, undefined, 4)}</pre>
  </Box>
);
