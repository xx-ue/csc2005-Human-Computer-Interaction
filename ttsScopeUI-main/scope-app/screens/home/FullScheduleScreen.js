import { StyleSheet, Text, View, SafeAreaView, Button ,useWindowDimensions } from "react-native";
import React from "react";
import { Table, Row, Rows } from "react-native-table-component";
import HeaderBar2 from "../../components/HeaderBar2";
import SectionBar from "../../components/SectionBar";
import { TabView, SceneMap } from 'react-native-tab-view';
const tableHead = ["Brand", "Model No.", "Serial No."];
const tableData = [
  ["Panasonic", "EO 552", "3355g34"],
  ["Fujinon", "DE 900", "66c6434"],
  ["Ajinomoto", "KO 222", "3g44865"],
  ["Johnson", "QE 112", "75c3324"],
  ["Thyme", "AS 240", "3h53542"],
];
const FirstRoute = () => (


  <Table
            borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
            style={styles.table}
          >
            {/* if textStyle got problem, edit textStyle in row.js  */}
            <Row data={tableHead} style={styles.head} textStyle={styles.textH} />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>

);

const SecondRoute = () => (
  <Table
              borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
              style={styles.table}
            >
              {/* if textStyle got problem, edit textStyle in row.js  */}
              <Row data={tableHead} style={styles.head} textStyle={styles.textH} />
              <Rows data={tableData} textStyle={styles.text} />
            </Table>

);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
export default function FullScheduleScreen(props) {
  const goFourWeekly = () => {
    props.navigation.navigate("FourWeeklyScreen");
  };

  const goTwelveWeekly = () => {
    props.navigation.navigate("TwelveWeeklyScreen");
  };
const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '4 WEEKLY SCHEDULE' },
    { key: 'second', title: '12 WEEKLY SCHEDULE' },
  ]);

  return (
  <>
  <View style={styles.space} />
  <View style={styles.space} />
  <View>
        <HeaderBar2 navigation={props.navigation} />
 </View>
  <View style={styles.space} />
  <View style={styles.space} />
  <View style={styles.space} />
  <View style={styles.space} />

  <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      </>
//    <SafeAreaView>
//      <HeaderBar2 navigation={props.navigation} />
//      <SafeAreaView style={styles.section}>
//        <SectionBar name="4 WEEKLY SCHEDULE" />
//      </SafeAreaView>
//      <View style={{ flexDirection: "row" }}>
//        <Table
//          borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
//          style={styles.table}
//        >
//          {/* if textStyle got problem, edit textStyle in row.js  */}
//          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
//          <Rows data={tableData} textStyle={styles.text} />
//        </Table>
//        <SafeAreaView style={styles.button}>
//          <Button title="VIEW" onPress={goFourWeekly} />
//          <View style={styles.space} />
//          <Button title="VIEW" onPress={goFourWeekly} />
//          <View style={styles.space} />
//          <Button title="VIEW" onPress={goFourWeekly} />
//          <View style={styles.space} />
//          <Button title="VIEW" onPress={goFourWeekly} />
//          <View style={styles.space} />
//          <Button title="VIEW" onPress={goFourWeekly} />
//        </SafeAreaView>
//      </View>
//
//      <SafeAreaView style={styles.section}>
//        <SectionBar name="12 WEEKLY SCHEDULE" />
//      </SafeAreaView>
//      <View style={{ flexDirection: "row" }}>
//        <Table
//          borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
//          style={styles.table}
//        >
//          {/* if textStyle got problem, edit textStyle in row.js  */}
//          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
//          <Rows data={tableData} textStyle={styles.text} />
//        </Table>
//        <SafeAreaView style={styles.button}>
//          <Button title="VIEW" onPress={goTwelveWeekly} />
//          <View style={styles.space} />
//          <Button title="VIEW" onPress={goTwelveWeekly} />
//          <View style={styles.space} />
//          <Button title="VIEW" onPress={goTwelveWeekly} />
//          <View style={styles.space} />
//          <Button title="VIEW" onPress={goTwelveWeekly} />
//          <View style={styles.space} />
//          <Button title="VIEW" onPress={goTwelveWeekly} />
//        </SafeAreaView>
//      </View>
//    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  head: { height: 50, backgroundColor: "#bde0fe",textAlign: "center"},
  text: { margin: 5, marginTop: 15, marginBottom: 15, fontSize: 16 ,textAlign: "center"},
  textH:{ margin: 5, marginTop: 10, marginBottom: 10,fontWeight: 'bold',fontSize: 20,textAlign: "center"},
  table: { margin: 10, marginTop: 15, width: "95%"},
  section: { marginTop: 10 },
  button: {
    width: "15%",
    height: 36,
    marginTop: 58,
    marginVertical: 4,
    //                marginBottom: 2,
    //                flex:1
  },
  space: {
    width: 5, // or whatever size you need
    height: 7,
  },
});
