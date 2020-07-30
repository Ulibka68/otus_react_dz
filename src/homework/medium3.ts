// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = (
  | "initial"
  | "inWork"
  | "fullfilled"
  | "buyingSupplies"
  | "producing"
)[];

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number]; // string

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
  orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  );
