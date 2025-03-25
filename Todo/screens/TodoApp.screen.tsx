import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import CheckIcon from '../components/atoms/icons/Check.icon';
import initialTodos from '../data/todos.json';

import Animated from 'react-native-reanimated';
import {PanGestureHandler, Swipeable} from 'react-native-gesture-handler';
import {PanGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture';
import {SwipeListView} from 'react-native-swipe-list-view';

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

interface ITodoListItemProps {
  item: ITodo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoListItem({item, onToggle, onDelete}: ITodoListItemProps) {
  return (
    <View style={styles.item}>
      <Text style={[styles.itemText, item.completed && styles.completedText]}>
        {item.text}
      </Text>
      <TouchableOpacity
        onPress={() => onToggle(item.id)}
        style={styles.iconContainer}>
        <CheckIcon style={styles.markCompleteIcon} />
      </TouchableOpacity>
    </View>
  );
}

function TodoAppScreen(): React.JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [inputText, setInputText] = useState('');

  const handleRemoveTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    );
    setTodos(updatedTodos);
  };

  const handleAddTodoClick = () => {
    const value = inputText?.trim();
    if (value) {
      const newTodo: ITodo = {
        id: Math.floor(Math.random() * 1000), // Unique ID generation
        text: value,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            style={styles.input}
            placeholder="Add new task"
          />
          <TouchableOpacity
            disabled={!inputText?.trim()}
            onPress={handleAddTodoClick}
            style={styles.button}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </TouchableOpacity>
        </View>

        {!!todos.length && (
          <SwipeListView
            data={todos}
            renderItem={({item}) => {
              return (
                <TodoListItem
                  item={item}
                  onToggle={handleToggleTodo}
                  onDelete={handleRemoveTodo}
                />
              );
            }}
            renderHiddenItem={(data, rowMap) => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => handleRemoveTodo(data.item.id)}
                    style={styles.deletButtonContainer}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => handleRemoveTodo(data.item.id)}
                    style={styles.deletButtonContainer}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            rightOpenValue={-75}
            stopLeftSwipe={1}
            ListHeaderComponent={
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>My Todo List</Text>
              </View>
            }
            ListFooterComponent={
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                  {todos.length === 0 ? 'No tasks available' : 'End of tasks'}
                </Text>
              </View>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  container: {
    flex: 1,
    padding: 16,
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
    backgroundColor: '#fff',
    fontSize: 16,
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
    fontWeight: '700',
  },
  item: {
    display: 'flex',
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#aaa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 10,
  },
  markCompleteIcon: {
    width: 24,
    height: 24,
    color: '#4caf50',
  },

  deletButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    width: 75,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerContainer: {
    backgroundColor: '#f4f4f4',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  footerContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
});

export default TodoAppScreen;
