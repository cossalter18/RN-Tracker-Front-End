import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
}; //end authReducer

//Example
//const add = (a,b) => a + b;

const signup = (dispatch) => async ({ email, password }) => {
  //make api request to sign up with email and password
  try {
    const response = await tracker.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("HomeScreen");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong signing up",
    });
  }
  //if we signup, we want to modify our state, and say that we are authenticated
  //if signing up fails, we need to show error message
};
// end signup

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await tracker.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch ({type: 'signin', payload: response.data.token})
    navigate('HomeScreen')
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Error with sign in",
    });
  }
  //try to sign in
  //handle success and update state
  // handle failure by showing error message
}; // end signing

const signout = (dispatch) => {
  return () => {
    //signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
