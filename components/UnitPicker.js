import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";


export default function UnitPicker({ unitSystem, setUnitSystem }) {
  return (
    <View style={styles.unitSystem}>
      <Picker
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 20 }}
      >
        <Picker.Item label="C" value='metric' />
        <Picker.Item label="F" value='imperial' />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitSystem: {
    position: 'absolute',
    top: 60,
    left: 20,
    height: 50,
    width: 100,

  },
});
