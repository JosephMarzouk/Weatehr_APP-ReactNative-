import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function ReloadIcon({ load }) {
  return (
    <View style={StyleSheet.reloadIcon}>
      <Ionicons onPress={load} name="ios-refresh" size={24} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 50,
    right: 20,
  },
});
