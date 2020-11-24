import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import constants from "../utils/constants";

import { DateTime } from "luxon";

import axios from "../utils/axios";

import { fontsName } from "../utils/fonts";

import Stars from "../components/Stars";

const Luxon = DateTime.local().setLocale("en");

/*dt.setLocale('fr').toLocaleString(DateTime.DATE_SHORT);
const date = DateTime.fromISO(release_date).setLocale('es').toFormat('MMM, y');
*/

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
  const startDate = DateTime.fromISO(animeInfo.start_date)
    .setLocale("en")
    .toFormat("dd/MMM/yyyy");
  const endDate = DateTime.fromISO(animeInfo.end_date).toFormat("dd/MMM/yyyy");

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
          <View style={styles.textDescriptionContainer}>
            <Text style={styles.subtitle}>Aired: </Text>
            <Text style={styles.textDescription}>
              {startDate} - {endDate}
            </Text>
          </View>
          <View style={styles.textDescriptionContainer}>
            <Text style={styles.subtitle}>Episodes:  </Text>
            <Text style={styles.textDescription}>{animeInfo.episodes}</Text>
          </View>
          <View style={styles.textDescriptionContainer}>
            <Text style={styles.subtitle}>Type:  </Text>
            <Text style={styles.textDescription}>{animeInfo.type}</Text>
          </View>
          <View style={styles.textDescriptionContainer}>
            <Text style={styles.subtitle}>Status:  </Text>
            <Text style={styles.textDescription}>{airing}</Text>
          </View>
          <View style={styles.textDescriptionContainer}>
            <Text style={styles.subtitle}>Rating:  </Text>
            <Text style={styles.textDescription}>{animeInfo.rated}</Text>
          </View>
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
    width: 170,
    height: 250,
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
    marginTop: 20,
  },
  synopsisText: {
    fontFamily: fontsName.REGULAR,
    fontSize: 14,
    color: constants.COLORS.WHITE,
  },
  starsContainer: {
    flexDirection: "row",
  },
  textDescriptionContainer: {
    flexDirection: "row",
  },
  textDescription: {
    fontFamily: fontsName.REGULAR,
    fontSize: 12,
    color: constants.COLORS.WHITE,
    marginTop: 3,
  },
});
