import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from "react";

import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";

export default function LabResultScreen(props) {

  const goReschedule = () => {
    props.navigation.navigate("RescheduleScreen")
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />

      <SafeAreaView style={styles.section}>
        <SectionBar name="PENDING RESCHEDULE" />
      </SafeAreaView>
      <SafeAreaView style={styles.box}>
        <Text>SCOPE TYPE: BRONCHOSCOPE</Text>
        <Text>MODEL NO.: BFP 190 (602)</Text>
        <Text>SERIAL NO.: 2912702</Text>
        <Text>FUID TEST: PASS</Text>
        <Text>SWAB TEST: FAIL</Text>
        <Button title="Reschedule" color="#80BDE3" onPress={goReschedule}/>
      </SafeAreaView>

      <SafeAreaView style={styles.section}>
        <SectionBar name="PASSED TESTS" />
      </SafeAreaView>
      <SafeAreaView style={styles.box}>
        <Text>SCOPE TYPE: OGD</Text>
        <Text>MODEL NO.: EG 760G (361)</Text>
        <Text>SERIAL NO.: 5G403K183</Text>
        <Text>FUID TEST: PASS</Text>
        <Text>SWAB TEST: PASS</Text>
        <Button title="Reschedule" color="#80BDE3" onPress={goReschedule} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 30 },
  box: {
    marginTop: 15,
    backgroundColor: "#ADD8E6",
    paddingLeft: 10,
    marginLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
});
