import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SectionBar from '../../components/SectionBar'
import HeaderBar2 from '../../components/HeaderBar2'
import { useRoute } from '@react-navigation/native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import DropDownPicker from 'react-native-dropdown-picker'

export default function SampleScreen(props) {

  const route = useRoute()

  const goHomeScreen = () => {
    // Send info to firebase here 
    props.navigation.navigate("Home")
  }

  const keys = []
  const vals = []
  const date = ''

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Positive', value: 'positive'},
    {label: 'Negative', value: 'negative'}
  ]);

  for (const [key, val] of Object.entries(route.params.scope)) {
    keys.push(key)
    vals.push([val])
  }
  return (
    <SafeAreaView>
      <HeaderBar2 navigation={props.navigation} />
      <SafeAreaView style={styles.section}>
        <SectionBar name="New Sample" />
      </SafeAreaView>
      <SafeAreaView>
        <View style={styles.box}>
          <Text style={styles.text_header}>Scope</Text>
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
      <SafeAreaView style={{marginTop:200, marginHorizontal: '2%'}}>
        <View style={styles.box}>
          <Text style={styles.text_header}>Result</Text>
        </View>
        <DropDownPicker
          open={open}
          value={'Result'}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
        <Button title='Submit' onPress={goHomeScreen}></Button>
      </SafeAreaView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  section: {
    marginTop: 30,
  },
  button: {
    margin: '5%',
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