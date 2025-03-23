/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Fragment, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckIcon from './components/atoms/icons/Check.icon';

function App(): React.JSX.Element {
  const [todos, setTodos] = useState(['Record Video', 'Have dinner']);
  const [inputText, setInputText] = useState('');

  function handleRemoveTodo(index: number) {
    const updatedTodos = todos.filter(
      (todo, currentIndex) => currentIndex != index,
    );
    setTodos(updatedTodos);
  }

  function handleAddTodoClick() {
    const value = inputText?.trim();
    if (value) {
      setTodos([value, ...todos]);
      setInputText('');
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            style={styles.input}></TextInput>
          <TouchableOpacity onPress={handleAddTodoClick} style={styles.button}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </TouchableOpacity>
        </View>

        {!!todos.length && (
          <ScrollView>
            <View style={styles.items}>
              {todos.map((todo, index) => {
                return (
                  <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>{todo}</Text>
                    <CheckIcon
                      onPress={() => handleRemoveTodo(index)}
                      style={styles.markCompleteIcon}></CheckIcon>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: 'flex',
    gap: 16,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,

    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: 'tomato',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 16,
    borderRadius: 16,
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 700,
  },

  items: {
    display: 'flex',

    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  item: {
    display: 'flex',
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 16,
  },
  itemText: {
    fontSize: 16,
  },
  markCompleteIcon: {},
});

export default App;
