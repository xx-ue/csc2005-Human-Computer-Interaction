import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import React from 'react'
import SectionBar from '../../components/SectionBar'
import HeaderBar2 from '../../components/HeaderBar2'
import { useRoute } from '@react-navigation/native'
import CalendarPicker from 'react-native-calendar-picker';


export default function RepairScreen(props) {
  const route = useRoute()

  const keys = []
  const vals = []
  const date = ''

  for (const [key, val] of Object.entries(route.params.scope)) {
    keys.push(key)
    vals.push([val])
  }
  return (
    <SafeAreaView>
      <HeaderBar2 navigation={props.navigation} />

      <SafeAreaView>
        <View style={styles.box}>
          <Text style={styles.text_header}>Scope Repair</Text>
        </View>
        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}>
            <Row
              data={["Field", "Detail"]}
              flexArr={[1, 3]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={keys}
                style={styles.title}
                heightArr={[28, 28, 28, 28, 28]}
                textStyle={styles.text}
              />
              <Rows
                data={vals}
                flexArr={[1, 2]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
      </SafeAreaView>

      <SafeAreaView>
        <View style={styles.box2}>
          <Text style={styles.text_header}>Return Date</Text>
        </View>
        <View style={{marginHorizontal: "30%"}}>
          <CalendarPicker/>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
        <Button title='Submit'></Button>
      </SafeAreaView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  section: {
    marginTop: 30,
  },
  button: {
    marginHorizontal: "5%",
  },
  box: {
    marginTop: "1%",
    justifyContent: "center",
    marginHorizontal: "2%",
    height: 50,
    backgroundColor: "#ADD8E6",
  },
  box2: {
    marginTop: "50%",
    justifyContent: "center",
    marginHorizontal: "2%",
    height: 50,
    backgroundColor: "#ADD8E6",
  },
  text_header: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 24,
  },
  container: {
    flex: 1,
    marginHorizontal: "2%",
    marginTop: "1%",
    backgroundColor: "#fff",
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  wrapper: {
    flexDirection: "row",
  },
  title: {
    flex: 1,
    backgroundColor: "#f6f8fa",
  },
  row: { height: 28 },
  text: { textAlign: "center" },
});