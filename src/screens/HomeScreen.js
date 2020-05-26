import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>Home</Text>
      <Button
        title="Go to Post Details"
        onPress={() => navigation.navigate("PostDetailScreen")}
      />
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,}
  });

export default HomeScreen;
