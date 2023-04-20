import { SafeAreaView, StyleSheet, View, Text, Button, SectionList, ScrollView } from "react-native";
import React, { useEffect, useState, useRoute } from "react";

import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";
import { firestore } from "../../firebase";

export default function ReviewScreen() {

  const [scope, setScope] = useState([])
  const [pendingTable, setPendingTable] = useState([])
  const [reviewedTable, setReviewedTable] = useState([])
  const [wash, setWash] = useState([])

  const goReviewDetail = (props) => {
    props.navigation.navigate("ReviewDetail", { scope });
  };

  function processPendingScope() {
    // Combine the data
    setPendingTable([])
    if (scope.length < 1) {
      return;
    }
    if (wash.length < 1) {
      return;
    }

    wash.forEach((wash) => {
      if (!wash.review) {
        scope.forEach((scope) => {
          if (wash.serial == scope.serial) {
            setPendingTable([...pendingTable, { ...wash, ...scope }]);
          }
        });
      }
    });
    console.log(pendingTable.size)
  }

  function processReviewedScope() {
    // Combine the data
    setReviewedTable([])
    if (scope.length < 1) {
      return;
    }
    if (wash.length < 1) {
      return;
    }

    wash.forEach((wash) => {
      if (!wash.review) {
        scope.forEach((scope) => {
          if (wash.serial == scope.serial) {
            setReviewedTable([...reviewedTable, { ...wash, ...scope }]);
          }
        });
      }
    });
    console.log(reviewedTable.length)
  }

  async function getScope() {
    setScope([])
    console.log('Getting Scope Data from Firebase here')
    firestore()
      .collection("scope")
      .get()
      .then((scopeInstance) => {
        setScope(scopeInstance.docs.map((doc) => doc.data()));
      });
    console.log(scope)
  }
   
  async function getWash() {
    setWash([])
    console.log('Getting wash Data from Firebase here')
    firestore()
      .collection("wash")
      .get()
      .then((washInstance) => {
        setWash(washInstance.docs.map((doc) => doc.data()));
      });
    console.log(wash)
  }

  useEffect(() => {
    getScope()
  }, [])

  useEffect(() => {
    getWash()
  }, [])

  useEffect(() => {
    processPendingScope()
    processReviewedScope()
  }, [scope, wash])

  
  const Item = (props) => (
    <View style={styles.item}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
  
  return (
    <ScrollView style={styles.container}>
      <HeaderBar />
      <SafeAreaView style={styles.section}>
        <SectionBar name="PENDING APPROVAL" />
      </SafeAreaView>
      {console.log(pendingTable.length)}
      <SafeAreaView>
        {pendingTable.length > 0 ? (
          pendingTable.map((d) => {
            return (
              <SafeAreaView style={styles.item}>
                <SafeAreaView style={styles.box}>
                  <Text>BRAND: {d.brand}</Text>
                  <Text>SCOPE TYPE: {d.type}</Text>
                  <Text>MODEL NO.: {d.model}</Text>
                  <Text>SERIAL NO.: {d.serial}</Text>
                  <Text>SERIAL NO.: {d.month}</Text>
                  <SafeAreaView style={styles.button}>
                    <Button title="Review" color="#80BDE3" />
                  </SafeAreaView>
                </SafeAreaView>
              </SafeAreaView>
            );
          })
        ) : (
          <Text>Loading...</Text>
        )}
      </SafeAreaView>
      <SafeAreaView style={styles.section}>
        <SectionBar name="Reviewed APPROVAL" />
      </SafeAreaView>
      <SafeAreaView>
        {reviewedTable.length > 0 ? (
          reviewedTable.map((d) => {
            return (
              <SafeAreaView style={styles.item}>
                <SafeAreaView style={styles.box}>
                  <Text>BRAND: {d.brand}</Text>
                  <Text>SCOPE TYPE: {d.type}</Text>
                  <Text>MODEL NO.: {d.model}</Text>
                  <Text>SERIAL NO.: {d.serial}</Text>
                  <Text>SERIAL NO.: {d.month}</Text>
                  <SafeAreaView style={styles.button}>
                    <Button title="Review" color="#80BDE3" />
                  </SafeAreaView>
                </SafeAreaView>
              </SafeAreaView>
            );
          })
        ) : (
          <Text>Loading...</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 30 },
  box: {
    marginTop: 15,
    backgroundColor: "#ADD8E6",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    margin:10,
    marginTop: 20
  }
});
