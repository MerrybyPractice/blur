import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhotoViewer from './components/photoViewer'; 

let photo_source = "https://image.tmdb.org/t/p/original/7FTY3r4vydTRho9pciudwS03x4B.jpg"

export default function App(photo_source) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <PhotoViewer source={photo_source}> </PhotoViewer>
      <StatusBar style="auto" />
    </View>
  );
}

//take in photo from camera
//  photo picker
//  photo viewer
//  select button

//access camera and allow user to take photo
//  in app camera button
//  photo viewer
//  select button

//in app photo editor
//identify face programatically 
//allow user to select faces
//blur function
//  shrink selection then blow up to full size at small pixel density
//save to device
//  confirm button

//temp storage in app but not in phone local -> possible? 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
