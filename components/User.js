/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {WebView} from 'react-native-webview';
import {Button} from 'react-native-paper';

const User = () => {
  return (
    <WebView source={{uri: 'https://daugia.lacvietauction.vn/UserProfile'}} />
  );
};

export default User;
