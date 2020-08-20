import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { withOnChangeValue } from "./withOnChangeValue";

export default {
  title: "HOC",
  decorators: [withKnobs],
};

// это тип компонент
const CompComponent = () => <input type="text" defaultValue="txt" />;
console.log("CompComponent", CompComponent);
// это тип React.element он описывает как будет идти рендер
const CompElement = <input type="text" defaultValue="txt" />;
console.log("CompElement", CompElement);

// Элемент нельзя передавать туда где нужен компонент - будет ошибка статья:
// https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
// Error:(18, 31) TS2345: Argument of type 'Element' is not assignable to parameter of type 'ComponentType<{}>'.
//     Type 'Element' is not assignable to type 'FunctionComponent<{}>'.
//     Type 'Element' provides no match for the signature '(props: { children?: ReactNode; }, context?: any): ReactElement<any, any> | null'.
// const WW0 = withOnChangeValue(CompElement);

const WW = withOnChangeValue(CompComponent);

// если вызвать так - то обертка сраобтает
// const WW = withOnChangeValue("input");

export const with_On_ChangeValue = () => [<WW key={1} />];
