import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const { width } = Dimensions.get('window');

function CardHomeComponent() {

    const images = [
        require('../../../assets/images/placeholders/home/1.jpg'),
        require('../../../assets/images/placeholders/home/2.jpg'),
        require('../../../assets/images/placeholders/home/1.jpg'),
      ];
 
  return (
    <ScrollView>
      <View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.reactionIcon}>
          <FontAwesome name="heart" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.carouselController}>
          <Image style={styles.image} 
          source={require('../../../assets/images/placeholders/home/1.jpg')}/>
        </View>
        <View style={styles.details}>
          <View style={styles.header}>
            <Text style={styles.title}>Kamwala South</Text>
            <View style={styles.rating}>
              <EvilIcons style={styles.ratingIcon} name="star" size={15} color="black" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          <View>
            <Text style={styles.description}>3 Bedroomed House</Text>
            <Text style={styles.description}>27 - 28 Sept</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>K3500.00</Text><Text> /month</Text>
            </View>
          </View>
        </View>
      </View>
      

      <View style={styles.card}>
        <TouchableOpacity style={styles.reactionIcon}>
          <FontAwesome name="heart" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.carouselController}>
          <Image style={styles.image} 
          source={require('../../../assets/images/placeholders/home/2.jpg')}/>
        </View>
        <View style={styles.details}>
          <View style={styles.header}>
            <Text style={styles.title}>Kamwala South</Text>
            <View style={styles.rating}>
              <EvilIcons style={styles.ratingIcon} name="star" size={15} color="black" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          <View>
            <Text style={styles.description}>3 Bedroomed House</Text>
            <Text style={styles.description}>27 - 28 Sept</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>K3500.00</Text><Text> /month</Text>
            </View>
          </View>
        </View>
      </View>


      <View style={styles.card}>
        <TouchableOpacity style={styles.reactionIcon}>
          <FontAwesome name="heart" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.carouselController}>
          <Image style={styles.image} 
          source={require('../../../assets/images/placeholders/home/1.jpg')}/>
        </View>
        <View style={styles.details}>
          <View style={styles.header}>
            <Text style={styles.title}>Kamwala South</Text>
            <View style={styles.rating}>
              <EvilIcons style={styles.ratingIcon} name="star" size={15} color="black" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          <View>
            <Text style={styles.description}>3 Bedroomed House</Text>
            <Text style={styles.description}>27 - 28 Sept</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>K3500.00</Text><Text> /month</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
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
      width: 350,
    },
    reactionIcon: {
      position: 'absolute',
      top: 10,
      left: 10,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 20,
      padding: 5,
      zIndex: 100,
    },
    carouselController: {
      margin: 0,
    },
    image: {
      width: 350,
      height: 400,
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
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    rating: {
      flexDirection: 'row',
      // justifyContent: 'space-between'
    },
    ratingIcon: {
      margin: 1,
    },
    ratingText: {
      marginLeft: 4,
    },
    priceContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    price: {
      fontWeight: 'bold'
    },
  });