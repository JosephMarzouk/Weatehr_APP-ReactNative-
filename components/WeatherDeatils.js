import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherDetails({ currentWeather, unitSystem }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} m/s`;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDeatilBox,
            borderRightWidth: 1,
            borderRightColor: "red",
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color="red"
            ></FontAwesome5>
            <View style={styles.weatherDetailsItem}>
              <Text> feels_like</Text>
              <Text style={styles.textSecondary}>{feels_like}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDeatilBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="water"
              size={35}
              color="red"
            ></MaterialCommunityIcons>
            <View style={styles.weatherDetailsItem}>
              <Text> Humidity : </Text>
              <Text style={styles.textSecondary}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: 1,
          borderTopColor: "red",
        }}
      >
        <View
          style={{
            ...styles.weatherDeatilBox,
            borderRightWidth: 1,
            borderRightColor: "red",
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="windy-weather"
              size={30}
              color="red"
            ></MaterialCommunityIcons>
            <View style={styles.weatherDetailsItem}>
              <Text> Wind Speed :</Text>
              <Text style={styles.textSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDeatilBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedmoeter"
              size={35}
              color="red"
            ></MaterialCommunityIcons>
            <View styles={styles.weatherDetailsItem}>
              <Text> Pressure : </Text>
              <Text style={styles.textSecondary}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    width: "100%",
    maxWidth: 350,
    alignSelf: "center",
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
  },

  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  weatherDeatilBox: {
    flex: 1,
    padding: 12,
  },

  weatherDetailsItem: {
    flexShrink: 1,
    marginLeft: 8,
  },

  textSecondary: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 4,
    color: "green",
  },
});



// const styles = StyleSheet.create({
//   weatherDeatilBox: {
//     flex: 1,
//     padding: 20,
    
//   },
//   weatherDetailsItem: {
//     alignItems: "flex-end",
//     justifyContent: "flex-end",
//   },
//   textSecondary: {
//     fontSize: 15,
//     fontWeight: "700",
//     margin: 7,
//     color: "green",
//   },
//   weatherDetails: {
//     marginTop: "auto",
//     margin: 15,
   
//     borderWidth: 1,
//     borderRadius: 10,
//     color: "red",
//   },
//   weatherDetailsRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
    
//   },
// });
