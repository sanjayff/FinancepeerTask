import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SizeConfig } from "../constants/size-config";
import { COLORS } from "../constants/colors";
import * as dataFile from "../data.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderComponent from "./components/header";

const JsonDisplayScreen = ({ navigation }) => {

  const [dataList, setDataList] = useState();

  const setLocalItem = async () => {
    AsyncStorage.setItem('somekey', JSON.stringify(dataFile))
      .then(json => console.log('success!'))
      .catch(error => console.log('error!'));
  };

  const getLocalItem = async () => {

    try {
      const jsonValue = await AsyncStorage.getItem('somekey');

      const list = JSON.parse(jsonValue);

      setDataList(list);
      // console.log("list: ", dataList);
      // return jsonValue != null ? JSON.parse(jsonValue) : null;

    } catch (e) {
      // error reading value
    }
  }

  const RenderList = () => {
    return (
      dataList != null ?
        Object.values(dataList).map(item => {
          return (
            <View style={styles.dataListContainer}>
              <View style={{flexDirection: "row"}}>
                <Text style={styles.dataListTitleText}>ID: </Text>
                <Text style={{marginTop: SizeConfig.blockHeight * 1,}}>{item.id}</Text>
              </View>
              <View style={{}}>
                <Text style={styles.dataListTitleText}>Title: </Text>
                <Text>{item.title}</Text>
              </View>
              <View style={{}}>
                <Text style={styles.dataListTitleText}>Body: </Text>
                <Text>{item.body}</Text>
              </View>
            </View>
          )
        }) : null

    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Display Json" />
      <TouchableOpacity onPress={setLocalItem}>
        <View style={styles.Btn}>
          <Text style={styles.BtnText}>Save file to local storage</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={getLocalItem}>
        <View style={styles.Btn}>
          <Text style={styles.BtnText}>Get file from local storage</Text>
        </View>
      </TouchableOpacity>
      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <RenderList />
      </ScrollView>

    </SafeAreaView>
  );
}

export default JsonDisplayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  Btn: {
    height: SizeConfig.blockHeight * 7,
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    backgroundColor: COLORS.greenMedium,
    marginVertical: SizeConfig.blockHeight * 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
  BtnText: {
    color: COLORS.whiteDark,
    fontSize: SizeConfig.blockHeight * 3,
    fontWeight: "700"
  },
  scrollViewContainer: {
    backgroundColor: COLORS.whiteDark,
    paddingVertical: SizeConfig.blockHeight * 2
  },
  dataListContainer: {
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    borderColor: COLORS.whiteMedium,
    borderWidth: 2,
    marginBottom: SizeConfig.blockHeight * 2,
    paddingVertical: SizeConfig.blockHeight * 1,
  },
  dataListTitleText: {
    fontWeight: "bold",
    marginTop: SizeConfig.blockHeight * 1,
    fontSize: SizeConfig.blockHeight * 2
  }
});