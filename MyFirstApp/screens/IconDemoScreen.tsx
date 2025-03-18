import React, {Fragment, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ColorWheel from 'react-native-wheel-color-picker';
import Text from '../components/atoms/Text/Text.component';
import Flexbox from '../components/organisms/Flexbox/Flexbox.component';

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

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <Flexbox justifyContentCenter alignItemsCenter gap={20}>
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
            <Icon key={icon} name={icon} size={30} color={color} />
          ) : (
            <Fragment />
          ),
        )}
      </Flexbox>
      <Text size={30} color={color} weight={600}>
        Current Color : {color}
      </Text>
      <Flexbox
        style={{
          width: '90%',
          aspectRatio: 1,
          marginTop: 20,
        }}>
        <ColorWheel color={color} onColorChange={handleColorChange} />
      </Flexbox>
    </Flexbox>
  );
}
