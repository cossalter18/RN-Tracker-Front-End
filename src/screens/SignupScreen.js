import React, { useContext } from "react";
import { View, StyleSheet} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink"

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Make an account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <NavLink
      routeName="Signin"
      text="Already have an account? Sign in" />
     
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
  
});

export default SignupScreen;
