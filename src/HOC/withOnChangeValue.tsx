import React from "react";

interface withOnChangeValuePropsInternal
  extends React.ComponentPropsWithoutRef<"input"> {
  onChangeValue?: (e: string) => void;
}

export const withOnChangeValue = (Component: React.ComponentType) => {
  return function InternalFunc(propsInternal: any) {
    function ChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
      if (propsInternal.onChangeValue) {
        e.preventDefault();
        propsInternal.onChangeValue(e.target.value);
      } else console.log("база : ", e.target.value);
    }

    console.log(propsInternal);
    return <Component {...propsInternal} onChange={ChangeHandler} />;
  };
};
