import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { SizeConfig } from '../../constants/size-config';
import { COLORS } from '../../constants/colors';

const HeaderComponent = ({ navigation, title }) => {
  return (
        <View style={styles.headerContainer}>
          <View style={styles.headeShadowContainer}>
            <View style={styles.headerContentContainer}>
              <View style={styles.headerContentsTitleConatiner}>
                <Text style={styles.headerTitleText}>{title}</Text>
              </View>
            </View>
          </View>
        </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({

  //headerContainer******************************************************
  headerContainer: {
    paddingBottom: 5,
    overflow: 'hidden',
  },
  headeShadowContainer: {
    backgroundColor: '#fff',
    width: SizeConfig.blockWidth * 100,
    height: SizeConfig.blockHeight * 9,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    flexDirection: 'row',
  },
  headerContentContainer: {
    marginLeft: SizeConfig.blockWidth * 3,
    height: SizeConfig.blockHeight * 9,
    width: SizeConfig.blockWidth * 70,
    flexDirection: 'row',
  },
  headerContentsTitleConatiner: {
    width: SizeConfig.blockWidth * 60,
    height: SizeConfig.blockHeight * 9,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitleText: {
    color: COLORS.greenMedium,
    fontFamily: 'Roboto-Medium',
    fontSize: SizeConfig.blockHeight * 3,
  },
});
