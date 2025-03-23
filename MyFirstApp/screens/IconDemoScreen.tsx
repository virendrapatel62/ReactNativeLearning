import Slider from '@react-native-community/slider';
import React, {Fragment, useState} from 'react';

import {
  Button,
  ScrollView,
  SectionListComponent,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ColorWheel from 'react-native-wheel-color-picker';
import Text from '../components/atoms/Text/Text.component';
import Flexbox from '../components/organisms/Flexbox/Flexbox.component';

const component = require('react-native-vector-icons/FontAwesome');

console.log(component);

const icons = [
  'facebook',
  'facebook-f',
  'google',
  'instagram',
  'twitter',
  'linkedin',
  'youtube',
  'pinterest',
  'tiktok',
  'user',
  'user-circle',
  'user-alt',
  'user-plus',
  'user-times',
  'users',
  'envelope',
  'phone',
  'comments',
  'chat',
  'message',
  'headset',
  'laptop',
  'desktop',
  'mobile',
  'tablet',
  'wifi',
  'bluetooth',
  'rocket',
  'cogs',
  'wrench',
  'toolbox',
  'download',
  'upload',
  'edit',
  'trash',
  'save',
  'sun',
  'moon',
  'cloud',
  'tree',
  'rain',
  'dollar-sign',
  'euro-sign',
  'credit-card',
  'briefcase',
  'chart-line',
  'heart',
  'star',
  'bookmark',
  'bell',
  'shopping-cart',
  'car',
];

export default function IconDemoScreen() {
  const [color, setColor] = useState('#000000');
  const [iconSize, setIconSize] = useState(20); // Initial value of the slider
  const [borderRadius, setIconRadius] = useState(20); // Initial value of the slider
  const [IconComponent, setIconComponent] = useState<Icon>();

  function onIconLibClick(lib: string) {
    // setIconComponent(Component);
  }

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <Flexbox style={styles.container}>
      <Flexbox
        style={{
          flex: 60,
          margin: 10,
        }}>
        <Flexbox alignItemsCenter>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={50}
            step={1}
            value={iconSize}
            onValueChange={newValue => setIconSize(newValue)}
            minimumTrackTintColor="#FF5733" // Color of the track on the left side
            maximumTrackTintColor="#CCCCCC" // Color of the track on the right side
            thumbTintColor="#FF5733" // Color of the thumb (slider knob)
          />
        </Flexbox>

        <Flexbox row>
          {['FontAwesome', 'EvilIcons'].map(lib => (
            <Button onPress={() => onIconLibClick(lib)} key={lib} title={lib} />
          ))}
        </Flexbox>

        <ScrollView
          style={{
            borderRadius: 16,
            borderWidth: 1,
            padding: 16,
            borderColor: color,
          }}>
          <Flexbox
            justifyContentCenter
            alignItemsCenter
            style={{
              marginTop: 20,
            }}
            gap={20}>
            <Flexbox
              row
              justifyContentCenter
              style={{
                flexWrap: 'wrap',
              }}
              gap={16}
              alignItemsCenter>
              {icons.map(icon =>
                Icon.hasIcon(icon) ? (
                  <Icon
                    style={{
                      backgroundColor: 'lightgray',
                      borderRadius: borderRadius,
                      padding: 8,
                    }}
                    key={icon}
                    name={icon}
                    size={iconSize}
                    color={color}
                  />
                ) : (
                  <Fragment />
                ),
              )}
            </Flexbox>
          </Flexbox>
        </ScrollView>
      </Flexbox>

      <Text size={30} color={color} weight={600}>
        Current Color : {color}
      </Text>

      <Flexbox
        style={{
          height: 300,
          aspectRatio: 1,
          marginTop: 20,
        }}>
        <ColorWheel color={color} onColorChange={handleColorChange} />
      </Flexbox>
    </Flexbox>
  );
}

const styles = StyleSheet.create({
  slider: {
    width: 300,
    height: 40,
  },

  container: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
});
