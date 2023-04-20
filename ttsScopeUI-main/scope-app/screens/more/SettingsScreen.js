import { StyleSheet, Text, View, SafeAreaView, Button,Switch, Platform, UIManager } from "react-native";//https://aboutreact.com/react-native-switch/#Code
import React,{useState, useEffect} from "react";
import {AccordionList} from 'react-native-accordion-list-view';

import HeaderBar2 from "../../components/HeaderBar2";
import SectionBar from "../../components/SectionBar"


//import { Switch } from 'react-native-paper';



export default function SettingsScreen(props) {

    const [switchValue, setSwitchValue] = useState(false);
//
      const toggleSwitch = (value) => {
        //To handle switch toggle
        setSwitchValue(value);
        //State changes according to switch
        };
        const data = [
                {
                    id: 0,
                    title: 'Report Problem',
                    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    id: 1,
                    title: 'Private Policy',
                    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
{
                    id: 2,
                    title: 'About Us',
                    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    id: 3,
                    title: 'Contact Us',
                    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },

            ];
            useEffect(() => {
                if (Platform.OS === 'android') {
                    if (UIManager.setLayoutAnimationEnabledExperimental) {
                        UIManager.setLayoutAnimationEnabledExperimental(true);
                    }
                }
            }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar2 navigation={props.navigation}/>

      <SafeAreaView style={styles.section}>
        <SectionBar name="General Settings" />
      </SafeAreaView>


     <SafeAreaView >
     <View style={{ flexDirection: "row" }}>
     <View style={{flex:1}}>
    <Text style={{justifyContent: 'flex-start',marginTop: 35,paddingLeft: 10,marginLeft: 10}}> Push Notification</Text>
    </View>
     <View style={{flex:1}}>
             <Switch
               style={{marginTop: 30,justifyContent: 'flex-end'}}
               onValueChange={toggleSwitch}
               value={switchValue}
             />
</View>
</View>
         </SafeAreaView>
<SafeAreaView >
<Text style={styles.text}>Support</Text>


</SafeAreaView >
<SafeAreaView>
            <View style={styles.box}>
                <AccordionList
                    data={data}
                    customTitle={item => <Text>{item.title}</Text>}
                    customBody={item => <Text>{item.body}</Text>}
                    animationDuration={400}
                />
            </View>
        </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 30 },
  box: {
    marginTop: 15,
    paddingLeft: 5,
    marginLeft: 10,
    paddingRight:5,
    marginRight: 10,
  },
  text:{
  marginTop: 15,

  marginLeft: 20,
   fontWeight: 'bold',
   marginBottom: 15,
    fontSize: 20,
  }

});
