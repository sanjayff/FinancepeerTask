import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, PermissionsAndroid, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SizeConfig } from "../constants/size-config";
import { COLORS } from "../constants/colors";


const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {

      navigation.replace('TabScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financepeer Assignment</Text>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.greenMedium
  },
  title: {
    fontWeight: 'bold',
    fontSize: SizeConfig.blockHeight * 4,
    color: COLORS.whiteDark
  },
});