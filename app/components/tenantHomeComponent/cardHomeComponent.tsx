import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

function CardHomeComponent() {

    const images = [
        require('../../../assets/images/placeholders/home/1.jpg'),
        require('../../../assets/images/placeholders/home/2.jpg'),
        require('../../../assets/images/placeholders/home/1.jpg'),
      ];

      const renderImage = ({ item }) => {
        if (!item) {
          console.error('Image item is undefined');
          return null;
        }
        return <Image source={item} style={styles.image} />;
      };

  return (
    <View style={styles.card}>
    <TouchableOpacity style={styles.reactionIcon}>
      <FontAwesome name="heart" size={24} color="#fff" />
    </TouchableOpacity>
    <Carousel
      data={images}
      renderItem={renderImage}
      sliderWidth={width}
      itemWidth={width}
      layout={'default'}
      autoplay
      autoplayInterval={3000}
    />
    <View style={styles.details}>
      <Text style={styles.title}>Title of the Card</Text>
      <Text style={styles.description}>This is a brief description of the card.</Text>
    </View>
  </View>
  )
}

export default CardHomeComponent

const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#fff',
      margin: 20,
      elevation: 5, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    reactionIcon: {
      position: 'absolute',
      top: 10,
      left: 10,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 20,
      padding: 5,
    },
    image: {
      width: width,
      height: 200,
    },
    details: {
      padding: 15,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
    },
  });