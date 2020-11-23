import React, { useEffect, useState } from "react";
import {  View,   Text,  Image,  StyleSheet,  Dimensions,  SafeAreaView, } from "react-native";
import constants from "../utils/constants";

import axios from "../utils/axios";
import { fontsName } from "../utils/fonts";

import Stars from "../components/Stars";


export const DetailsScreen = ({ navigation, route }) => {
  const { anime } = route.params;
  const nameAnime = anime.title;

  const [animeInfo, setAnime] = React.useState([]);

  useEffect(() => {
    axios
      .get(`search/anime?q=${nameAnime}`)
      .then((res) => {
        const animeData = res.data.results[0];
        setAnime(animeData);
      })
      .catch((err) => console.log(err));
  }, [setAnime]);

  let airing = "Finished";
  if (animeInfo.airing) {
    airing = "Currently Airing";
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {animeInfo.title}
        </Text>
      </View>

      <View style={styles.card}>
        <Image style={styles.img} source={{ uri: animeInfo.image_url }} />
        <View style={styles.containerDescription}>
          <Text style={styles.subtitle}>
            Aired: {animeInfo.start_date}- {animeInfo.end_date}
          </Text>
          <Text style={styles.subtitle}>Episodes: {animeInfo.episodes}</Text>
          <Text style={styles.subtitle}>Type: {animeInfo.type}</Text>
          <Text style={styles.subtitle}>Status: {airing}</Text>
          <Text style={styles.subtitle}>Rating: {animeInfo.rated}</Text>
          <View style={styles.starsContainer}>
            <Stars starsSum={animeInfo.score}></Stars>
          </View>
        </View>
      </View>
      <View style={styles.synopsis}>
        <Text style={styles.subtitle}>Synopsis: </Text>
        <Text numberOfLines={5} style={styles.synopsisText}>
          {animeInfo.synopsis}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: constants.COLORS.DARK_BLUE,
  },
  img: {
    width: 210,
    height: 350,
  },
  titleContainer: {
    width: "100%",
    paddingHorizontal: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: fontsName.BOLD,
    fontSize: 35,
    color: constants.COLORS.WHITE,
  },
  card: {
    flexDirection: "row",
    marginTop: 50,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: constants.COLORS.DARK_BLUE2,
  },
  containerDescription: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  subtitle: {
    fontFamily: fontsName.BOLD,
    fontSize: 16,
    color: constants.COLORS.WHITE,
  },
  synopsis: {
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,
  },
  synopsisText: {
    fontFamily: fontsName.REGULAR,
    fontSize: 14,
    color: constants.COLORS.WHITE,
  },
  starsContainer: {
    flexDirection: "row",
  },
});
