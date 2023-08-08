import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  ToastAndroid,
} from "react-native";
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
    } else {
      ToastAndroid.show("Please enter a goal", ToastAndroid.SHORT);
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.goalInput}
            placeholder="Set a new goal:"
            placeholderTextColor="#EDF2F4"
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonsContainer}>
            <Button
              title="Back to Goals"
              onPress={props.toggleModal}
              color={"#8D99AE"}
            />
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#8D99AE"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#2B2D42",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: "100%",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "20%",
    marginVertical: "2%",
  },

  goalInput: {
    borderWidth: 1,
    borderColor: "#EDF2F4",
    borderRadius: 5,
    color: "#EDF2F4",
    width: "90%",
    padding: 5,
    marginHorizontal: "5%",
  },
});
