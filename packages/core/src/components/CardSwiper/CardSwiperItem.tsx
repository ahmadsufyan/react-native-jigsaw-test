import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export interface CardSwiperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CardSwiperItem = ({ children, style }: CardSwiperProps) => (
  <View style={[styles.wrapper, style]}>{children}</View>
);

export default CardSwiperItem;
