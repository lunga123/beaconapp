import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  TextProps } from './Themed'
export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
