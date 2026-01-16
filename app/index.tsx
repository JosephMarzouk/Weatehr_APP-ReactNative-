import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

//Local components  :
import ReloadIcon from "@/components/ReloadIcon";
import UnitPicker from "@/components/UnitPicker";
import WeatherDetails from "@/components/WeatherDeatils";
import WeatherInfo from "@/components/WeatherInfo";

const APIKey = "ad8cbc8af92064bf5d248ce8e0190a09";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?";

// End Point
//baseURLlat={lat}&lon={lon}&appid={API key}

export default function App() {
  const [errorMSG, setErrorMSG] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitSystem, setUnitSystem] = useState("metric");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, [unitSystem]);

  async function load() {
    setLoading(true);
    setErrorMSG("");
    setCurrentWeather(null);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMSG("Access to location is required");
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { longitude, latitude } = location.coords;
      const URL = `${baseURL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${APIKey}`;
      const response = await fetch(URL);
      const result = await response.json();
      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setCurrentWeather(result.errorMSG);
      }
    } catch (error) {
      setErrorMSG(errorMSG);
    }
  }
  if (currentWeather ) {
    const {
      main: { temp },
    } = currentWeather;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <UnitPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <ReloadIcon load={load}></ReloadIcon>
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails
          currentWeather={currentWeather}
          unitSystem={unitSystem}
        ></WeatherDetails>
      </View>
    );
  } else if (errorMSG) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReloadIcon load={load}></ReloadIcon>
        <Text style={{ textAlign: "center" }}>There is no data to display</Text>
        
      </View>
    );
  }
  else{
    return(
      <View style={styles.container}>
      <ActivityIndicator size='large' color='red'/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
});
