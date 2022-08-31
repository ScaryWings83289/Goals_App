// Packages Imports
import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");

  // Handle Input Change
  const handleGoalInput = (text) => {
    setGoal(text);
  };

  // Handle Button Click
  const handleGoalAdd = () => {
    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          value={goal}
          onChangeText={handleGoalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={handleGoalAdd} color='#b180f0' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
