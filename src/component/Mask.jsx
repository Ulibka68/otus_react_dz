import React from "react";
import MaskedInput from "react-text-mask";

export default function MaskedInputTest() {
  return (
    <div>
      <MaskedInput
        mask={[
          "(",
          /[1-9]/,
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
      />
    </div>
  );
}
