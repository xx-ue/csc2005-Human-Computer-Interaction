import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const HeaderBar = () => {
  return (
    <SafeAreaView style={styles.header}>
        <Text style={styles.text_header}> TTSH Endoscope Scheduler</Text>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ADD8E6",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 25,
  },
  text_header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default HeaderBar;
