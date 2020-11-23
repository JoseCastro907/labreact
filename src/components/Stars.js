import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import constants from "../utils/constants";

const Stars = ({ starsSum }) => {

  if (starsSum >= 9) {
    return (
      <View style={styles.starsContainer}>
        <FontAwesome name="star" size={24} color={constants.COLORS.YELLOW} />
        <FontAwesome name="star" size={24} color={constants.COLORS.YELLOW} />
        <FontAwesome name="star" size={24} color={constants.COLORS.YELLOW} />
        <FontAwesome name="star" size={24} color={constants.COLORS.YELLOW} />
        <FontAwesome name="star-o" size={24} color={constants.COLORS.YELLOW} />
      </View>
    );
}else {
    return (
      <View style={styles.starsContainer}>
        <FontAwesome name="star" size={24} color={constants.COLORS.YELLOW} />
        <FontAwesome name="star" size={24} color={constants.COLORS.YELLOW} />
        <FontAwesome name="star" size={24} color={constants.COLORS.YELLOW} />
        <FontAwesome name="star-half-empty" size={24} color={constants.COLORS.YELLOW} />
        <FontAwesome name="star-o" size={24} color={constants.COLORS.YELLOW} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
  },
});

export default Stars;

