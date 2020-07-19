import React from "react";
import { mount, shallow } from "enzyme";
import Operand, { getOperand } from "./Operand";
import type { OperandProps } from "./component_Interface";

describe("Operand test", () => {
  it("Рендер простой строки Operand", () => {
    // const oprnd1 = shallow(<Operand opName = {"55"}   passOperand = {"55"} handleClick = {jest.fn()}/>);
    const oper = shallow(
      <Operand opName="55" passOperand="55" handleClick={jest.fn()} />
    );
    expect(oper.find(".number").length).toBe(1);
  });

  it("Рендер строки с дополнительным классом Operand", () => {
    const props: OperandProps = {
      opName: "6",
      passOperand: "6",
      handleClick: jest.fn(),
      additional_class: "addClass",
    };
    const oper = mount(getOperand(props));
    expect(oper.find(".addClass").length).toBe(1);
    expect(oper.find("div").text()).toEqual("6");
  });

  it("Проверка функции Click Operand", () => {
    const handleClick_jest = jest.fn();

    const props: OperandProps = {
      opName: "6",
      passOperand: "61",
      handleClick: handleClick_jest,
      additional_class: "addClass",
    };
    const oper = mount(getOperand(props));
    oper.find("div").simulate("click");
    expect(handleClick_jest.mock.calls.length).toBe(1);
    // The first argument of the first call to the function was 61
    console.log("Вывод через консоль ***********************");
    expect(handleClick_jest.mock.calls[0][0]).toBe("61");
    expect(handleClick_jest).toHaveBeenCalledWith('61');
  });

  it("Рендер картинки SVG Operand", () => {
    const props: OperandProps = {
      opName: "#divide",
      passOperand: "/",
      handleClick: jest.fn(),
      additional_class: "addClass",
    };
    const oper = mount(getOperand(props));
    expect(oper.props()).toEqual({
      opName: "#divide",
      passOperand: "/",
      handleClick: expect.any(Function),
      additional_class: "addClass",
    });

    expect(oper.find("svg").length).toBe(1);
  });
});
