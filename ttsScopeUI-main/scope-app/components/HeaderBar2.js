import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import IonicIcon from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";
import React from "react";

const HeaderBar2 = (props) => {
    
  const goHome = () => {
    props.navigation.navigate("Home")
  };

  const goBack = () => {
    props.navigation.goBack()
  };

  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity style={styles.backIcon} onPress={goBack}>
        <AntIcon name="back" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeIcon} onPress={goHome}>
        <IonicIcon name="home" size={30} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ADD8E6",
  },
  backIcon: {
    marginLeft: 10,
  },
  homeIcon: {
    position: "absolute",
    right: 0,
    marginRight: 10,
  },
});

export default HeaderBar2;
