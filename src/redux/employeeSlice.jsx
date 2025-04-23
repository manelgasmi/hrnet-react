import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "user",
  initialState: {
    employees: [], 
  },
  reducers: {
  },
});
export const {
  
} = employeeSlice.actions;

export default employeeSlice.reducer;
