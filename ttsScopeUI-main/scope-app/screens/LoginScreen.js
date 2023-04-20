import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import HeaderBar from "../components/HeaderBar";
import { auth, firestore } from "../firebase";

function LoginScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged(user => {
      if (user){
        if (user.uid == "UGKkazjXfjeXUuGnOliPtx7Ae1R2"){
          props.navigation.navigate("SeniorNavigation")
        } else{
          props.navigation.navigate("JuniorNavigation")
        }
      }
    })
    return unsubscribed
  }, [])


  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email.text, password.text)
    .then( userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
  }

    // const handleSignUp = () => {
  //   auth.createUserWithEmailAndPassword(email,password)
  //   .then( userCredentials => {
  //     const user = userCredentials.user;
  //     console.log('Regustered with:', user.email);
  //   })
  //   .catch(error => alert(error.message))
  // }


  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />

      <SafeAreaView style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <SafeAreaView style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            value={email}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(text) => setEmail({text})}
          />
        </SafeAreaView>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <SafeAreaView style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            value= {password}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(text) => setPassword({text})}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress= {handleLogin} style={styles.signIn}>
            <Text style={[styles.textSign, { color: "black" }]}>Log In</Text>
            </TouchableOpacity>
        </SafeAreaView>

      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  footer: {
    flex: 3,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop:50,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,

    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alightItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
