import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = ({ desc }) => {
  return (
    <View style={styles.task}>
      <View style={styles.leftDiv}>
        <View style={styles.square}></View>
        <Text style={styles.taskDesc}>{desc}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  taskDesc: {
    maxWidth: "80%",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
  },
})

export default Task;