import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreate from "./src/screens/TrackCreate";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackList from "./src/screens/TrackList";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackList,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreate,
    Account: AccountScreen,
  }),
});


export default createAppContainer(switchNavigator);