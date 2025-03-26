import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckIcon from '../components/atoms/icons/Check.icon';
import initialTodos from '../data/todos.json';
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
  onLongPress: () => void;
}

function TodoListItem({item, onToggle, ...props}: ITodoListItemProps) {
  return (
    <View style={styles.item}>
      <Text
        onLongPress={props.onLongPress}
        style={[styles.itemText, item.completed && styles.completedText]}>
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
    const onDelete = () => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
    };

    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this item?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', onPress: onDelete, style: 'destructive'},
      ],
    );
  };
  const handleLongPress = (index: number, todo: ITodo) => {
    const onUpdate = (value?: string) => {
      if (!value) return;

      const updatedTodos = [...todos];
      updatedTodos[index].text = value;
      setTodos(updatedTodos);
    };

    Alert.prompt('Edit Todo', `You are editing ${todo.text}`, [
      {text: 'Done', onPress: onUpdate, style: 'default'},
      {text: 'Cancel', style: 'cancel'},
    ]);
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
            contentContainerStyle={styles.listContainerStyle}
            renderItem={({item, index}) => {
              return (
                <TodoListItem
                  onLongPress={() => handleLongPress(index, item)}
                  item={item}
                  onToggle={handleToggleTodo}
                  onDelete={handleRemoveTodo}
                />
              );
            }}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.hiddenButtonsContainer}>
                <TouchableOpacity
                  onPress={() => handleRemoveTodo(data.item.id)}
                  style={styles.deletButtonContainer}>
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleRemoveTodo(data.item.id)}
                  style={styles.deletButtonContainer}>
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                    height={28}
                    width={28}></Image>
                </TouchableOpacity>
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

  listContainerStyle: {
    display: 'flex',
    gap: 10,
  },

  hiddenButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    height: '100%',
  },
  button: {
    backgroundColor: 'tomato',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
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

    paddingHorizontal: 10,
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
    borderColor: 'tomato',
    borderWidth: 1,
    backgroundColor: 'white',
    width: 75,
    height: '100%',
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
