import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, ScrollView } from 'react-native';
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();

  const [tasks, updateTasks] = useState([
   "My first task",
   "Task 2"
  ])

  const handleAddTask = () => {
    Keyboard.dismiss();
    updateTasks([...tasks, task]);
    setTask();
  }

  const completeTask = () => {
    let tasksCopy = [...tasks];
    // tasksCopy.splice(index, 1);
    // updateTasks(tasksCopy);
  }

  const removeTask = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    updateTasks(tasksCopy);
  }

  // const dragTaskAnimation = () => {
  //   //
  // }

  return (
    <View style={styles.container}>

      {/* Today's Tasks Section */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.tasks}>
          {/* This is where the tasks will go */}
          { tasks.map( (text, index) => {
              return (
                // need an animation for onScrollBeginDrag
                <ScrollView key={index} onScrollEndDrag={() => removeTask(index)}>
                  <TouchableOpacity onPress={() => completeTask()}>
                    <Task desc={text} />
                  </TouchableOpacity>
                </ScrollView>
              )
            }) 
          }
        </View>
        
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
        style={styles.input} 
        placeholder="todo desc" 
        value={task}
        onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tasks: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60, 
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  }, 
  addText: {},
});
