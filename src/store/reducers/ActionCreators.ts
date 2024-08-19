import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://jsonplaceholder.typicode.com/users";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.userFetching());
//     const response = await axios.get<IUser[]>(url);
//     dispatch(userSlice.actions.userFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(userSlice.actions.userFetchingError(error as string));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(url);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Problem");
    }
  }
);
