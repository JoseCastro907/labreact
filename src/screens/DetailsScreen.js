import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'

export const DetailsScreen = ({navigation, route }) => {
    const { anime } = route.params;

    return (
        <View>
            <Text>{anime.title}</Text>
            <Text>{anime.score}</Text>
        </View>
    )
}


/*
por ahora viene solo el nombre pero para llegarle a la info hay que buscar por medio de esta url 
    https://api.jikan.moe/v3/search/anime?q="y en esta parte se le pone el title que viene por props"

y en la parte de results podemos sacar la "title","synopsis","score" y tal vez "rated"

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
   
    en la Clase 27/10/2020 esta el video para hacer eso

*/