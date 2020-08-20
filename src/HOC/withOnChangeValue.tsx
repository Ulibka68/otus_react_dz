import React from "react";

export const withOnChangeValue = (Component: React.ComponentType) => {
  return function InternalFunc(propsInternal: any) {
    function ChangeHandler(e: React.ChangeEvent) {
      console.log("функция из обертки");
    }

    console.log(Component);

    return <Component onChange={ChangeHandler} {...propsInternal} />;
  };
};
