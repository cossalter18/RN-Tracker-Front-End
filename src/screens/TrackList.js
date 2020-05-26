import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackList = ({navigation}) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackList</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackList;
