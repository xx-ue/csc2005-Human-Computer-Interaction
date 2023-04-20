import { Button,SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SectionBar from '../../components/SectionBar'
import HeaderBar2 from '../../components/HeaderBar2'
import { useRoute } from '@react-navigation/native'
import { firestore } from '../../firebase'
import DatePicker from 'react-native-modern-datepicker';

export default function WashScreen(props) {

  const route = useRoute()

  const [month, setMonth]= React.useState(null)
  const [DoC, setDoC]= React.useState(null)
  const [accession, setAccession]= React.useState(null)
  const [washBy, setWashBy]= React.useState(null)
  const [collectedBy, setCollectedBy]= React.useState(null)
  const [circulatedBy, setCirculatedBy]= React.useState(null)


  const submitWash = () => {
    firestore()
      .collection('wash')
      .add({
        'month': month,
        'dateOfCollection': DoC,
        'accession': accession,
        'washBy': washBy,
        'collectedBy': collectedBy,
        'circulatedBy': circulatedBy,
        'review': false,
      })
      .then(() => {
        console.log('Wash Submitted')
      })
    props.navigation.navigate("HomeScreen")
  };



  return (
    <SafeAreaView>
      <HeaderBar2 navigation={props.navigation} />

      <SafeAreaView style={styles.section}>
        <SectionBar name="Add Wash" />
        <ScrollView>
          <View>
            <View style={styles.label}>
              <Text style={styles.titleText}>Month</Text>
            </View>
            <TextInput
              style={styles.textBox}
              value={month}
              textAlign="center"
              editable={false}
              selectTextOnFocus={false}
            />
            <View 
              style={{ 
                marginBottom: "5%", 
                marginTop: "1%",
                marginHorizontal: "5%" 
              }}
            >
              <DatePicker
                onMonthYearChange={(date) => setMonth(date)}
                mode="monthYear"
              />
            </View>
          </View>

          <View>
            <View style={styles.label}>
              <Text style={styles.titleText}>Date Of Collection</Text>
            </View>
            <TextInput
              style={styles.textBox}
              value={DoC}
              textAlign="center"
              editable={false}
              selectTextOnFocus={false}
            />
            <View style={{ marginBottom: "5%", marginHorizontal: "10%" }}>
              <DatePicker
                onSelectedChange={(date) => setDoC(date)}
                mode="calendar"
              />
            </View>
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.titleText}>Accession</Text>
            </View>
            <TextInput
              style={styles.textBox}
              value={accession}
              onChangeText={setAccession}
              textAlign="center"
            />
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.titleText}>Washed By</Text>
            </View>
            <TextInput
              style={styles.textBox}
              value={washBy}
              onChangeText={setWashBy}
              textAlign="center"
            />
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.titleText}>Collected By</Text>
            </View>
            <TextInput
              style={styles.textBox}
              value={collectedBy}
              onChangeText={setCollectedBy}
              textAlign="center"
            />
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.titleText}>Circulated By</Text>
            </View>
            <TextInput
              style={styles.textBox}
              value={circulatedBy}
              onChangeText={setCirculatedBy}
              textAlign="center"
            />
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.titleText}>Model</Text>
            </View>
            <TextInput
              style={styles.textBox}
              value={route.params.scope.model}
              textAlign="center"
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.titleText}>Serial Number</Text>
            </View>
            <TextInput
              style={styles.textBox}
              value={route.params.scope.serial}
              textAlign="center"
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <SafeAreaView style={styles.button}>
            <Button title="WASH" onPress={submitWash} />
          </SafeAreaView>
          <View style={{ height: 200 }} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  section: {
    marginTop: 30,
    color: 'black',
  },

  textBox: {
    height: 40,
    marginHorizontal: 12,
    marginTop: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  label: {
    width: "50%",
    height: 40,
    borderRadius: 10,
    marginHorizontal: "2%",
    paddingHorizontal: 12,
    justifyContent: "center",
    paddingVertical: 5,
    backgroundColor: "#ADD8E6",
    marginTop: 10,
    alignItems: "center",
    color: 'black'
  },
  titleText: {
    fontSize: 20,
    color: "black",
  },
  button: {
    margin: "2%",
  },
});