import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import HeaderBar from "../../components/HeaderBar";
import { auth } from "../../firebase";

export default function MoreScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");

  const goSettings = () => {
    props.navigation.navigate("SettingsScreen")
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const handleYearlyReschedule =() => {
    if (value === "CONFIRM"){
      Alert.alert("Yearly Reschedule confirmed! ")
      setModalVisible(!modalVisible)
      setValue("")
    }
    else {
      Alert.alert("Invalid input")
    }
  }

  const logoutAlert = () =>
    Alert.alert(
      "Confirm Action",
      "Are you sure you want to do this?",
      [
        {
          text: "Yes",
          onPress: () => handleSignOut(),
          style: "Yes",
        },
        {
          text: "No",
          onPress: () => Alert.alert("Action Cancelled Successfully"),
          style: "No",
        },
      ],
    );

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <HeaderBar />
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.more}
        >
          <Text style={[styles.textSign, { color: "black" }]}>
            Yearly Reschedule
          </Text>
        </TouchableOpacity>
      </SafeAreaView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalHeaderCloseText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Please enter "CONFIRM" below to reschedule for the year:{" "}
            </Text>
            <TextInput
              onChangeText={setValue}
              value={value}
              placeholder="Enter here"
              style={styles.input}
            />
            <Pressable
              style={[styles.modalButton, styles.buttonClose]}
              onPress={handleYearlyReschedule}
            >
              <Text style={styles.textStyle}>Enter</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <SafeAreaView style={styles.button}>
        <TouchableOpacity onPress = {goSettings} style={styles.more}>
          <Text style={[styles.textSign, { color: "black" }]}>Settings</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
        <TouchableOpacity onPress={logoutAlert} style={styles.more}>
          <Text style={[styles.textSign, { color: "black" }]}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 30 },
  button: {
    alightItems: "center",
    margin: 50,
  },
  more: {
    width: "100%",
    height: 50,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  header: {
    marginBottom: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalHeaderCloseText: {
    paddingLeft: 200,
    paddingBottom: 20,
  },
  input : {
    marginBottom: 20,
    borderBottomWidth: 1
  }
});
