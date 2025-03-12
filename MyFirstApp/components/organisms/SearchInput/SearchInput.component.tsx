import React, {useState} from 'react';
import Text from '../../atoms/Text/Text.component';
import Flexbox from '../Flexbox/Flexbox.component';
import {StyleSheet, Switch, TextInput, View} from 'react-native';
import SearchIcon from '../../atoms/icons/Search.icon';
import MicIcon from '../../atoms/icons/Mic.icon';

export default function SearchInput() {
  const [vegMode, setVegMode] = useState(false);

  return (
    <Flexbox style={styles.container} row alignItemsCenter justifyContentCenter>
      <Flexbox row style={styles.inputContainer} alignItemsCenter>
        <SearchIcon></SearchIcon>
        <TextInput
          style={styles.input}
          placeholder="Serach 'biryani'"></TextInput>

        <View style={styles.separator}></View>
        <MicIcon />
      </Flexbox>
      <Flexbox justifyContentCenter alignItemsCenter>
        <Text
          style={{
            lineHeight: 12,
          }}
          size={12}
          weight={600}>
          VEG
        </Text>
        <Text
          style={{
            lineHeight: 9,
          }}
          weight={600}
          size={10}>
          mode
        </Text>
        <Switch
          value={vegMode}
          onValueChange={setVegMode}
          style={styles.switch}></Switch>
      </Flexbox>
    </Flexbox>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 8,
  },

  inputContainer: {
    flex: 1,
    padding: 12,
    gap: 12,

    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    boxShadow: '-2px 4px 24px -18px rgba(158,149,158,1)',
  },

  separator: {
    borderWidth: 0.6,
    borderColor: '#eee',
  },
  input: {
    flex: 1,
    height: '100%',
  },

  switch: {
    transform: [
      {
        scaleY: 0.5,
      },
      {
        scaleX: 0.5,
      },
    ],
    marginVertical: -7,
  },
});
