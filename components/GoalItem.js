import { StyleSheet, View, Text } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#7373cc",
    borderRadius: 6,
  },

  goalText: {
    color: "white",
  },
});
