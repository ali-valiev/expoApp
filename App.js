import { View, StyleSheet, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  function addGoalHandler(enteredGoal) {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentGoalsList) => {
      return currentGoalsList.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.mainContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                deleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    marginTop: 25,
    flex: 5,
  },
});
