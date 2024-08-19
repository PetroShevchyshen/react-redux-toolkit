import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialStore: IUserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStore,
  reducers: {
    // userFetching(state) {
    //   state.isLoading = true;
    // },
    // userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.users = action.payload;
    // },
    // userFetchingError(state, action: PayloadAction<string>) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.isLoading = false;
          state.error = "";
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;
