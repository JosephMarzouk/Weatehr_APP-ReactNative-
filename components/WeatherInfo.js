import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [deatils],
    name,
  } = currentWeather;
  const { icon, main, description } = deatils;
  const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.weatherName}>{name}</Text>
      <Image source={{ uri: iconURL }} style={styles.weatherIcon}></Image>
      <Text style={styles.weatherTemp}>{temp} C</Text>
      <Text style={styles.weatherDesc}>{description} </Text>
      <Text style={styles.weatherMain}>{main} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },

  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  weatherTemp: {
    fontSize: 40,
    color: "red",
  },
  weatherDesc : {
    textTransform : "capitalize"
  },
  weatherMain : {
    fontSize : 20, 
    fontWeight : 450,
    marginTop: 10,
    color : 'green'
  }
});
