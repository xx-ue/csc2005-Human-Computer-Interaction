import { StyleSheet, Text, SafeAreaView, View ,Button,ScrollView, textAlign,useState, Alert} from "react-native";
import React from 'react'
import HeaderBar2 from '../../components/HeaderBar2'
import { Table, Row, Rows } from "react-native-table-component";
import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";


const tableHead1 = ["SCOPE DETAILS"];
const tableData1 = [
  ["BRAND", "OLYMPUS"],
  ["TYPE", "BRONCHOSCOPE"],
  ["MODEL NO.", "BFP 190 (602)"],
  ["SERIAL NO.", "2912702"],
  ["STATUS", "REGULAR"],
];
const tableHead2 = ["Month",'Date'];
const tableData2 = [
  ["OCTOBER", "12/10/2022"],
  ["NOVEMBER", "10/11/2022"],
  ["DECEMBER", "16/12/2022"],
  ["..."],
  ["..."],
  ["..."],
  ["..."],
  ["..."],
  ["..."],
["..."],
["..."],
];
export default function RescheduleScreen(props) {
const showAlert = () =>
  Alert.alert(
    "Confirm Action",
    "Are you sure you want to do this?",
    [
    {
            text: "Yes",
            onPress: () => Alert.alert("Action Confirmed"),
            style: "Yes",
          },
      {
        text: "No",
        onPress: () => Alert.alert("Action Cancelled Successfully"),
        style: "No",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

  return (
     <SafeAreaView>
            <HeaderBar2 navigation={props.navigation} />
            <ScrollView style={styles.scrollView}>
              <Table
                borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
                style={styles.table}
              >
                {/* if textStyle got problem, edit textStyle in row.js  */}
                <Row data={tableHead1} style={styles.head} textStyle={styles.text} />
                <Rows data={tableData1} textStyle={styles.text} />
              </Table>
              <Table
                borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
                style={styles.table}
              >
                {/* if textStyle got problem, edit textStyle in row.js  */}
                <Row data={tableHead2} style={styles.head} textStyle={styles.text} />

                <Rows data={tableData2} textStyle={styles.text} />

              </Table>

              <SafeAreaView style={styles.button}>
               <Button title="RESCHEDULE" onPress={showAlert} />


               </SafeAreaView>
               </ScrollView>
            </SafeAreaView>
          );
        }

        const styles = StyleSheet.create({
          container: { flex: 1, backgroundColor: "#fff" },
          head: { height: 40, backgroundColor: "#f1f8ff",alignItems: "center" ,justifyContent: "center", textAlign: 'center'},
          text: { margin: 10 },
          table: { marginTop: 15, margin:10 },
          section: { marginTop: 10 },
          scrollView: {

            },
          button: { margin:10, marginBottom:50},

        });
