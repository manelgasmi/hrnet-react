import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "user",
  initialState: {
    employees: [], 
  },
  reducers: {
    setEmplyees: (state, action) => {
      state.employees.push(action.payload)
    },
  },
});
export const {
  setEmplyees,
} = employeeSlice.actions;

export default employeeSlice.reducer;
