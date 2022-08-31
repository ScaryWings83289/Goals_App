// Packages Imports
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

// Components Imports
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  // Open Modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handle Button Click
  const handleGoalButton = (goal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: goal, id: Math.random().toString() },
    ]);
    handleCloseModal();
  };

  // Handle Deleting Goals
  const handleDeleteGoals = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={handleOpenModal}
        />

        <GoalInput
          visible={openModal}
          onCancel={handleCloseModal}
          onAddGoal={handleGoalButton}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={handleDeleteGoals}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceHorizontal={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});
