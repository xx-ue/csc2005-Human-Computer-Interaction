import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import { React, useState, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";
import { Agenda } from "react-native-calendars";
import { firestore } from "../../firebase";
import DateTimePicker from "@react-native-community/datetimepicker";

function toDateTime(secs) {
  var t = new Date(1970, 0, 1);
  t.setTime(secs * 1000);
  let year = t.getFullYear();
  let month = t.getMonth() + 1;
  let day = t.getDate();
  return year + "-" + less10(month) + "-" + less10(day);
}
function less10(time) {
  return time < 10 ? "0" + time : time;
}
export default function HomeScreen(props) {
  const goFullSchedule = () => {
    props.navigation.navigate("FullScheduleScreen");
  };

  const [scope, setScope] = useState([]);
  const [jsonObj, setJsonObj] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedScope, setSelectedScope] = useState("");
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  function processScope() {
    var json = {};
    if (scope.length >= 0) {
      for (let i = 0; i < scope.length; i++) {
        if (json[toDateTime(scope[i]["Wash_Date"].seconds)] != null) {
          json[toDateTime(scope[i]["Wash_Date"].seconds)].push({
            name: scope[i].Scope,
          });
        } else {
          json[toDateTime(scope[i]["Wash_Date"].seconds)] = [
            { name: scope[i].Scope },
          ];
        }
      }

      console.log(json);
      setJsonObj(json);
      setLoading(false)
    }
  }

  const delay = (time) => new Promise((res) => setTimeout(res, time));

  async function getScope() {
    await delay(1000);
    firestore()
      .collection("event")
      .get()
      .then((snapshot) => {
        setScope(snapshot.docs.map((doc) => doc.data()));
      });
  }

  async function updateScope(formattedDate) {
    firestore()
      .collection("event")
      .where("Scope", "==", selectedScope.name)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) =>
          doc.ref.update({
            Scope: selectedScope.name,
            Wash_Date: formattedDate,
          })
        );
      });
  }

  const handleUpdate = () => {
    if (date == null || date.type === "dismissed") {
      Alert.alert("You did not select a date to reschedule");
    } else {
      setLoading(true)
      var formattedDate = new Date(date.nativeEvent.timestamp);
      updateScope(formattedDate);
      Alert.alert(
        selectedScope.name +
          " has been rescheduled to " +
          formattedDate.toString()
      );
    }
    getScope();
    setModalVisible(false);
  };

  useEffect(() => {
    getScope();
  }, []);

  useEffect(() => {
    processScope();
  }, [scope]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderBar />
        <SafeAreaView style={styles.section}>
          <SectionBar name="WEEKLY SCHEDULE" />
        </SafeAreaView>

        {/* <SafeAreaView>
        <Text>{scope.Scope}</Text>
      </SafeAreaView> */}
        {loading ? (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <>
            <Agenda
              items={jsonObj}
              renderItem={(item, isFirst) => (
                <ScrollView>
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                      setSelectedScope(item);
                      setModalVisible(true);
                    }}
                  >
                    <Text style={styles.itemText}>{item.name}</Text>
                  </TouchableOpacity>
                </ScrollView>
              )}
              renderEmptyData={() => {
                return <SafeAreaView></SafeAreaView>;
              }}
            />

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
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.modalHeaderCloseText}>X</Text>
                  </TouchableOpacity>
                  <Text style={styles.modalText}>
                    Please select date to reschedule scope {selectedScope.name}:
                  </Text>
                  <Button title="Change Date" onPress={() => setOpen(true)} />
                  {open ? (
                    <DateTimePicker
                      mode="date"
                      display="default"
                      value={new Date()}
                      onChange={(newDate) => {
                        setOpen(false);
                        setDate(newDate);
                      }}
                    />
                  ) : (
                    []
                  )}
                  <SafeAreaView style={styles.postData}>
                    <Pressable
                      style={[styles.modalButton, styles.buttonClose]}
                      onPress={handleUpdate}
                    >
                      <Text style={styles.textStyle}>Confirm</Text>
                    </Pressable>
                  </SafeAreaView>
                </View>
              </View>
            </Modal>

            <SafeAreaView style={styles.button}>
              <Button
                title="VIEW 4/12 Weekly Schedules"
                onPress={goFullSchedule}
              />
            </SafeAreaView>
          </>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  table: { marginTop: 25 },
  section: { marginTop: 30 },
  button: { margin: 50 },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    marginTop: 20,
  },
  itemText: {
    color: "#888",
    fontSize: 16,
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
  input: {
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  postData: {
    marginTop: 20,
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
