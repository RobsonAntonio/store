import { createAction, createReducer } from "@reduxjs/toolkit";

export const addItem = createAction("ADD_ITEM");
export const removeItem = createAction("REMOVE_ITEM");

const INITIAL_STATE: any[] | (() => any[]) = [];

export default createReducer(INITIAL_STATE, {
  [addItem.type]: (state, action) => [...state, action.payload],
  [removeItem.type]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});
