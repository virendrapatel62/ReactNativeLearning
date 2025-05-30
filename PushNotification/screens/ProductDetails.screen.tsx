import {useRoute} from '@react-navigation/native';
import React, {Fragment, useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';

function ProductDetailsScreen() {
  const {id} = useRoute().params as {id: string};
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(json => {
        setProduct(json);
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
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black',
        }}>
        Product Of The Day
      </Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Fragment>
          <Image
            source={{uri: product?.image}}
            style={{width: 200, height: 200}}
          />
          <Text style={styles.textSmall}> Title: {product?.title}</Text>
          <Text style={styles.textSmall}> ID: {product?.id}</Text>
          <Text style={styles.textSmall}> Price: {product?.price}</Text>
          <Text style={styles.textSmall}>
            Description: {product?.description}
          </Text>
          <Text style={styles.textSmall}> Category: {product?.category}</Text>
          <Text style={styles.textSmall}>Image: {product?.image}</Text>
          <Text style={styles.textSmall}> Rate: {product?.rating?.rate}</Text>
          <Text style={styles.textSmall}> Count: {product?.rating?.count}</Text>
        </Fragment>
      )}
    </View>
  );
}

export default ProductDetailsScreen;

// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//   "rate": 3.9,
//   "count": 120
//   }
//   }
