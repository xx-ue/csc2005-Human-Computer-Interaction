import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from 'react'
import HeaderBar2 from '../../components/HeaderBar2'
import { Table, Row, Rows } from "react-native-table-component";
import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";

const tableHead = ["Month", "Date"];
const tableData = [
  ["JANUARY", "10/01/2022"],
  ["FEBRUARY", "03/02/2022"],
  ["MARCH", "06/03/2022"],
  ["APRIL", "09/04/2022"],
  ["MAY", "11/05/2022"],
  ["JUNE", "07/06/2022"],
    ["JULY", "02/07/2022"],
    ["AUGUST", "05/08/2022"],
    ["SEPTEMBER", "08/09/2022"],
    ["OCTOBER", "12/10/2022"],
    ["NOVEMBER", "04/11/2022"],
      ["DECEMBER", "09/12/2022"],

];
export default function FourWeeklyScreen(props) {
  return (
    <SafeAreaView>
        <HeaderBar2 navigation={props.navigation}/>
    <SafeAreaView style={styles.section}>
            <SectionBar name="SERIAL NO.: XXXXXXXX" />
          </SafeAreaView>
          <Table
            borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
            style={styles.table}
          >
            {/* if textStyle got problem, edit textStyle in row.js  */}
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>

        </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
      container: { flex: 1, backgroundColor: "#fff" },
      head: { height: 40, backgroundColor: "#f1f8ff" },
      text: { margin: 10 },
      table: { marginTop: 15, margin:10 },
      section: { marginTop: 10 },
//      button: { margin:10}
    });