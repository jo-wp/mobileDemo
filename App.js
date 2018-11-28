/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Style from './assets/style';

export default class App extends React.Component {
  render() {
    return (
      <View style={Style.body}>
        <Text style={Style.textWhite}>Bienvenue sur</Text>
        <Text style={Style.textWhite}>On Mange Quoi</Text>
        <Text style={Style.textWhiteLittle}>Réaliser le plat de ce soir en 20 minutes maximum ! </Text>
      </View>
    );
  }
}

