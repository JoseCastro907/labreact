import React, { useEffect, useState } from "react";
import {  View,  ScrollView,  Text,  Pressable,  Image,  StyleSheet,  Dimensions,  SafeAreaView,} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import constants from "../utils/constants";

import axios from "../utils/axios";
import { fontsName } from "../utils/fonts";

const { width, height } = Dimensions.get("screen");

const Stars = ({ realVotes }) => {
  return (
    <View style={styles.starsContainer}>
      {[...Array(5).keys()].map((position) => {
        if (position < realVotes) {
          return (
            <FontAwesome name="star" size={16} color={constants.COLORS.WHITE} />
          );
        } else {
          return (
            <FontAwesome
              name="star-o"
              size={16}
              color={constants.COLORS.WHITE}
            />
          );
        }
      })};
    </View>
  );
};

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

  let airing = "Finalizado";
  if (animeInfo.airing) {
    airing = "Emisión";
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{animeInfo.title}</Text>
      </View>

      <View style={styles.card}>
        <Image style={styles.img} source={{ uri: animeInfo.image_url }} />
        <View style={styles.containerDescription}>
          <Text style={styles.subtitle}>
            Emisión: {animeInfo.start_date}- {animeInfo.end_date}
          </Text>
          <Text style={styles.subtitle}>Episodios: {animeInfo.episodes}</Text>
          <Text style={styles.subtitle}>Tipo: {animeInfo.type}</Text>
          <Text style={styles.subtitle}>Estado: {airing}</Text>
          <Text style={styles.subtitle}>Categoría: {animeInfo.rated}</Text>
          <Text style={styles.subtitle}>Stars</Text>
        </View>
      </View>
      <View style={styles.synopsis}>
          <Text style={styles.subtitle}>Synopsis: </Text>
          <Text numberOfLines={5} style={styles.synopsisText}>{animeInfo.synopsis}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.DARK_BLUE,
  },
  img: {
    width: 210,
    height: 350,
  },
  titleContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    paddingBottom: 8,
    paddingTop: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: fontsName.BOLD,
    fontSize: 30,
    color: constants.COLORS.WHITE,
  },
  card: {
    flexDirection: "row",
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
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
  synopsis:{
      flexDirection: "row",
      marginRight: 20,
      marginLeft: 20,
  },
  synopsisText:{
      fontFamily: fontsName.REGULAR,
      fontSize: 14,
      color: constants.COLORS.WHITE,

  },
});

/*
"results": [
    {
      "mal_id": 11741,
      "url": "https://myanimelist.net/anime/11741/Fate_Zero_2nd_Season",
      "image_url": "https://cdn.myanimelist.net/images/anime/8/41125.jpg?s=78a6e73a2cd5856b28d8c182cd5a1a22",
      "title": "Fate/Zero 2nd Season",
      "airing": false,
      "synopsis": "As the Fourth Holy Grail War rages on with no clear victor in sight, the remaining Servants and their Masters are called upon by Church supervisor Risei Kotomine, in order to band together and confron...",
      "type": "TV",
      "episodes": 12,
      "score": 8.6,
      "start_date": "2012-04-08T00:00:00+00:00",
      "end_date": "2012-06-24T00:00:00+00:00",
      "members": 756584,
      "rated": "R"
    },
   
    en la Clase 27/10/2020 esta el video para hacer eso*/
