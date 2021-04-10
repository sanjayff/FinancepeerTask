import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SizeConfig } from "../constants/size-config";
import { COLORS } from "../constants/colors";
import HeaderComponent from "./components/header";

// import GetLocation from 'react-native-get-location'
// import Geocoder from 'react-native-geocoding';



const LocationScreen = ({ navigation }) => {

  const [locationName, setLocationName] = useState("");

  // useEffect(() => {
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 15000,
  //   })
  //     .then(location => {
  //       console.log(location);
  //     })
  //     .catch(error => {
  //       const { code, message } = error;
  //       console.warn(code, message);
  //     })
  // }, []);

  const getCity = () => {
    console.log("get city func");


    fetch('https://ip-api.com/json')
      .then((response) => response.json())
      .then((response) => {
        console.log('User\'s Location Data is ', response.city);
        console.log('User\'s Country ', response.country);
        setLocationName(response.city)
      })
      .catch((error) => {
        console.error(error);
      });

  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Location Screen" />
      <TouchableOpacity onPress={getCity}>
        <View style={styles.getCityContainer}>
          <Text style={styles.getCityText}>Click to get your current location</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.locationContainer}>
        <Text style={styles.locationDesc}>Your current city is: </Text>
        <Text style={styles.locationName}>{locationName}</Text>
      </View>
    </SafeAreaView>
  );
}

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteMedium
  },
  getCityContainer: {
    height: SizeConfig.blockHeight * 7,
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    backgroundColor: COLORS.greenMedium,
    marginVertical: SizeConfig.blockHeight * 3,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  getCityText: {
    fontSize: SizeConfig.blockHeight * 2.5,
    fontWeight: "700",
    color: COLORS.whiteDark,
  },
  locationContainer: {
    height: SizeConfig.blockHeight * 7,
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  locationDesc: {
    fontSize: SizeConfig.blockHeight * 2.2,
    fontWeight: "700"
  },
  locationName: {
    fontSize: SizeConfig.blockHeight * 2.2,
    fontWeight: "700",
    color: COLORS.greenMedium,
  }
});