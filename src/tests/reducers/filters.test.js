import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    text: "en",
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe("en");
});

test("should set startDate filter", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: 0,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(0);
});

test("should set endDate filter", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: 1000,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(1000);
});
