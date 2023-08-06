import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },

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

  goalsContainer: {
    marginTop: 25,
    flex: 5,
  },

  goal: {
    margin: 8,
    padding: 8,
    backgroundColor: "#7373cc",
    borderRadius: 6,
  },

  goalText: {
    color: "white",
  },
});

export default styles;
