import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.goalInput}
        placeholder="Set a new goal:"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
  },

  goalInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    width: "70%",
    padding: 5,
    marginRight: 10,
  },
});
