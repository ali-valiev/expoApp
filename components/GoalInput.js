import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoal !== "") {
      props.onAddGoal(enteredGoal);
      setEnteredGoal("");
      props.toggleModal();
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.goalInput}
            placeholder="Set a new goal:"
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button
            title="Add Goal"
            onPress={addGoalHandler}
            style={styles.addGoalButton}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
  },

  inputContainer: {
    width: "95%",
  },

  goalInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    width: "85%",
    padding: 5,
    marginRight: 10,
  },

  addGoalButton: {
    width: "30%",
  },
});
