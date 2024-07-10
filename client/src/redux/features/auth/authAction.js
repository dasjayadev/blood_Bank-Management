import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

//this is for Login

export let userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      let { data } = await API.post("/auth/v1/login", {
        email,
        password,
        role,
      });
      if (data.success) {
        if (data.token) {
          localStorage.setItem("blood-token", data.token);
          window.location.replace("/");
          toast.success(data.message);
        }
        return data;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.responce.data.message);
      } else {
        toast.error(error.message);
        return rejectWithValue(error.responce);
      }
    }
  }
);

//This is for the registration

export let userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      email,
      password,
      name,
      role,
      phone,
      address,
      hospitalName,
      originazationName,
    },
    { rejectWithValue }
  ) => {
    try {
      let { data } = await API.post("/auth/v1/register", {
        email,
        password,
        name,
        role,
        phone,
        address,
        hospitalName,
        originazationName,
      });
      if (data.sucess) {
        toast.success(data.message);
        window.location.replace("./login");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.responce.data.message);
      } else {
        toast.error(error.message);
        return rejectWithValue(error.responce);
      }
    }
  }
);

//this is for the get-cuttent user

export let getCurrentUser = createAsyncThunk(
  "auth/current-user",
  async ({ rejectWithValue }) => {
    try {
      let res = await API.get("/auth/v1/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      if (error.responce && error.responce.data.message) {
        return rejectWithValue(error.responce.data.message);
      } else {
        return rejectWithValue(error.responce);
      }
    }
  }
);
