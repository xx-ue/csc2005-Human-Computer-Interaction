import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const SectionBar = (props) => {
  return (
    <SafeAreaView style={styles.section}>
        <Text style={styles.text_header}> {props.name} </Text>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  section: {
    backgroundColor: "#ADD8E6",
    alignItems: "center",
  },
  text_header: {
    color: "black",
    fontSize: 24,
  },
});

export default SectionBar;
