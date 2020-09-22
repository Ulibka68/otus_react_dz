/** @jsx jsx */
import React from "react";

// import styled from "@emotion/styled";
// import { css } from "@emotion/core";

import { jsx } from "@emotion/core";

const Box: React.FC = ({ children }) => (
  <div
    css={{
      padding: 8,
      border: "1px solid cornflowerblue",
      backgroundColor: "midnightblue",
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

function syntaxHighlight(json: any) {
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match: any) {
      let cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}

/*
const obj = {
    a: 1,
    b: "foo",
    c: [false, "false", null, "null", { d: { e: 1.3e5, f: "1.3e5" } }]
};
const str = JSON.stringify(obj, undefined, 4);
*/

// output(str);
// output(syntaxHighlight(str));

/*
pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }
.string { color: green; }
.number { color: darkorange; }
.boolean { color: blue; }
.null { color: magenta; }
.key { color: red; }
*/
