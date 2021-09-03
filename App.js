import React from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text
} from 'react-native';
export default function App() {
  return (
    <View style={{flex: 1,justifyContent: "flex-end"}}>
      <View style={{backgroundColor: "dodgerblue",flex: 1,justifyContent: "center",}}>
        <ImageBackground
          style={{height: '100%',}}
          source={require("./app/assets/background.jpg")}></ImageBackground>
          <View style={{height: '100%',width: '100%',position: 'absolute',justifyContent: 'center',flexDirection: 'row',padding: 50,flex: 1,}}>
            <View style={{height: 200,width: '100%',}}>
              <ImageBackground
                style={{height: 100,width: 100,alignSelf: 'center'}}
              source={require("./app/assets/logo-red.png")}></ImageBackground>
            <View style={{ width: '100%', marginTop: 10 , justifyContent: 'center', flexDirection: 'row'}}>
              <Text>
                Lorem ipsum dolor
              </Text>
            </View>
            </View>
          </View>
      </View>
      <View style={{
        backgroundColor: "tomato",
        height: 50,
      }}>
      </View>
      <View style={{
        backgroundColor: "gay",
        height: 50,
      }}>
      </View>
    </View>
  );
}
