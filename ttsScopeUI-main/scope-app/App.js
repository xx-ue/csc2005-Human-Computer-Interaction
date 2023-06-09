import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import AppNavigator from "./AppNavigator";



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
