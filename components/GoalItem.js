import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#5151a0" }}
        onPress={props.deleteGoal.bind(this, props.id)}
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
    backgroundColor: "#7373cc",
    borderRadius: 6,
  },

  goalText: {
    color: "white",
    padding: 6,
  },
});
