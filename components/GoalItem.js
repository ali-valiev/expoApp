import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#697282" }}
        onLongPress={props.deleteGoal.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 2,
    backgroundColor: "#8D99AE",
    borderRadius: 6,
  },

  goalText: {
    color: "#EDF2F4",
    padding: 6,
  },
});
