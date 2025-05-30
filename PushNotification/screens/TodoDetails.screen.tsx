import React, {Fragment, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

function TodoDetailsScreen() {
  const {id} = useRoute().params as {id: string};
  const [todo, setTodo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => {
        setTodo(json);
        setIsLoading(false);
      });
  }, [id]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 20,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
    textSmall: {
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo Of The Day</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Fragment>
          <Text style={styles.textSmall}> Title: {todo?.title}</Text>
          <Text style={styles.textSmall}> ID: {todo?.id}</Text>
          <Text style={styles.textSmall}> User ID: {todo?.userId}</Text>
          <Text style={styles.textSmall}>
            Completed: {todo?.completed ? 'Yes' : 'No'}
          </Text>
        </Fragment>
      )}
    </View>
  );
}

export default TodoDetailsScreen;
