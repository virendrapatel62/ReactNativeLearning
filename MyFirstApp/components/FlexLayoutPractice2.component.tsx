import React from 'react';
import {Image, Text, View} from 'react-native';

export default function FlexLayoutPractice2() {
  return (
    <View
      style={{
        padding: 16,
        gap: 8,
      }}>
      <View
        style={{
          position: 'relative',
        }}>
        <Text
          style={{
            position: 'absolute',
            zIndex: 1,
            backgroundColor: 'black',
            color: 'white',
            top: 8,
            left: 8,
            borderRadius: 8,
            padding: 4,
            opacity: 0.6,
          }}>
          Promoted
        </Text>
        <Text
          style={{
            position: 'absolute',
            zIndex: 1,
            backgroundColor: 'dodgerblue',
            color: 'white',
            bottom: 16,
            fontWeight: 500,
            left: 0,
            padding: 4,
          }}>
          Free Punjabi Lassi [300 ml]
        </Text>
        <Image
          style={{
            height: 300,

            borderRadius: 16,
          }}
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
      </View>
      <View
        style={{
          gap: 4,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontWeight: 600,
            }}>
            Frutful
          </Text>
          <Text
            style={{
              backgroundColor: 'green',
              color: 'white',
              fontWeight: 600,
              borderRadius: 4,
              width: 40,
              textAlign: 'center',
            }}>
            4.4
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontWeight: 300,
            }}>
            Salad, healthy Food
          </Text>
          <Text
            style={{
              fontWeight: 300,
            }}>
            $200 for one
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 600,
              textAlign: 'right',
            }}>
            32 Min
          </Text>
        </View>
      </View>
    </View>
  );
}
