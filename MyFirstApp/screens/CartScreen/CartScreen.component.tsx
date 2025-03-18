import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../../components/atoms/Text/Text.component';
import Flexbox from '../../components/organisms/Flexbox/Flexbox.component';
const getImageUrl = () => {
  return `https://picsum.photos/200/300?${Math.random()}`;
};
const products = [
  {
    productName: 'Classic Denim Jacket',
    shortDescription: 'A timeless blue denim jacket with a relaxed fit.',
    price: 59.99,
  },
  {
    productName: 'Slim Fit Chinos',
    shortDescription:
      'Chinos with a slim fit and comfortable stretch material.',
    price: 39.99,
  },
  {
    productName: 'V-Neck Cotton T-Shirt',
    shortDescription: 'Soft, breathable cotton t-shirt with a classic v-neck.',
    price: 19.99,
  },
  {
    productName: 'Luxury Wool Sweater',
    shortDescription: 'Warm, high-quality wool sweater with a cozy feel.',
    price: 79.99,
  },
  {
    productName: 'Sporty Running Shoes',
    shortDescription:
      'Lightweight and breathable running shoes for ultimate comfort.',
    price: 89.99,
  },
  {
    productName: 'Plaid Button-Down Shirt',
    shortDescription:
      'Casual plaid shirt with a comfortable fit, perfect for layering.',
    price: 34.99,
  },
  {
    productName: 'Leather Biker Jacket',
    shortDescription: 'Stylish leather jacket with a sleek biker design.',
    price: 149.99,
  },
];

export default function CartScreen() {
  return (
    <View style={styles.container}>
      {/* Section 1 */}
      <Flexbox>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.cardContainer}>
          {/* Cart Product Card */}
          <Flexbox gap={16}>
            {products.map(({price, productName, shortDescription}, index) => (
              <Flexbox
                style={{
                  backgroundColor: '#fcfafa',
                  padding: 12,
                  borderRadius: 16,
                }}
                key={index}
                gap={16}
                row>
                <View>
                  <Image style={styles.image} src={getImageUrl()}></Image>
                </View>
                <Flexbox gap={12} style={{flex: 1}}>
                  <Flexbox row justifyContentSpaceBetween>
                    <View>
                      <Text size={14} numberOfLines={1} weight={700}>
                        {productName}
                      </Text>
                    </View>
                    <Image
                      height={20}
                      width={20}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1oG15xO3ntA7XZjJvncQSxz4TSEV7aIr9g&s"></Image>
                  </Flexbox>
                  <Flexbox row>
                    <Text
                      style={{flex: 60}}
                      size={12}
                      weight={400}
                      color={'#666'}
                      numberOfLines={1}>
                      {shortDescription}
                    </Text>
                    <Text style={{flex: 40}}></Text>
                  </Flexbox>

                  <Flexbox
                    style={{
                      width: '100%',
                    }}
                    row
                    justifyContentSpaceBetween>
                    <Text
                      style={{
                        flex: 1,
                      }}
                      size={14}
                      weight={700}>
                      ${price}
                    </Text>
                    <Flexbox row gap={16} style={styles.numberOfItemsContainer}>
                      <Text>-</Text>
                      <Text>1</Text>
                      <Text>+</Text>
                    </Flexbox>
                  </Flexbox>
                </Flexbox>
              </Flexbox>
            ))}
          </Flexbox>
        </ScrollView>
      </Flexbox>

      {/* Section 2 */}
      <Flexbox style={styles.couponSection}>
        <Flexbox alignItemsCenter row justifyContentSpaceBetween>
          <Text size={14} weight={400}>
            Enter Promo Code
          </Text>
          <Button title="Apply"></Button>
        </Flexbox>
      </Flexbox>

      {/* Section 3 */}

      <Flexbox gap={16}>
        <Flexbox gap={16}>
          <Flexbox row justifyContentSpaceBetween alignItemsCenter>
            <Text color={'gray'}>Subtotal</Text>
            <Text weight={600}>$890</Text>
          </Flexbox>
          <Flexbox row justifyContentSpaceBetween alignItemsCenter>
            <Text color={'gray'}>Shipping</Text>
            <Text weight={600}>$20</Text>
          </Flexbox>
        </Flexbox>

        <View style={styles.line}></View>

        <Flexbox row justifyContentSpaceBetween alignItemsCenter>
          <Text weight={600}>Total</Text>
          <Text weight={600}>$900</Text>
        </Flexbox>
      </Flexbox>

      <Flexbox style={styles.button}>
        <TouchableOpacity>
          <Flexbox
            style={styles.buttonInner}
            row
            justifyContentSpaceBetween
            alignItemsCenter>
            <Text></Text>
            <Text color={'white'} weight={600} size={16}>
              Checkout
            </Text>
            <Text color={'white'} weight={600} size={16}>
              {'>>>'}
            </Text>
          </Flexbox>
        </TouchableOpacity>
      </Flexbox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 16,

    gap: 16,
    flex: 1,
  },

  image: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 8,
  },

  cardContainer: {
    backgroundColor: '#fff',
    height: 400,
  },
  couponSection: {
    padding: 12,
    backgroundColor: '#fcfafa',

    borderColor: 'lightgray',
    borderWidth: 0.2,
    borderRadius: 16,
  },

  line: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#444',
  },

  button: {
    marginTop: 16,

    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
  },

  buttonInner: {
    backgroundColor: 'tomato',
    borderRadius: 50,
    padding: 14,
    borderColor: 'none',

    paddingHorizontal: 48,
  },

  numberOfItemsContainer: {
    borderRadius: 50,
    backgroundColor: 'lightgray',
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
});
