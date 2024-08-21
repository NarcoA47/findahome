import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, View, ScrollView, Animated, Dimensions } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const carouselData = [
    { title: '1 Bedroom', color: '#3700FF' },
    { title: '2 Bedroom', color: '#3700FF' },
    { title: '3 Bedroom', color: '#3700FF' },
    { title: '4 Bedroom', color: '#3700FF' },
    { title: '5 Bedroom', color: '#3700FF' },
  ];

function HomeNavigation() {


    const scrollX = useRef(new Animated.Value(0)).current;
    const [query, setQuery] = useState('');

    return (
        <View>
            <View>
                <View>
                    <View style={styles.container}>
                    <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={query}
                    onChangeText={text => setQuery(text)}
                    />
                    <View>
                    <Ionicons name="filter-circle-outline" size={40} color="#8F8F8F" />
                    </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                <Animated.ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                    >
                    {carouselData.map((item, index) => {
                    return (
                        <View style={[styles.card, { backgroundColor: item.color }]} key={index}>
                        <Text style={styles.text}>{item.title}</Text>
                        </View>
                    );
                    })}
                </Animated.ScrollView>
                </View>
                
            </View>
        </View>
    )
}

export default HomeNavigation

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        margin: 20,
        flexDirection: 'row',
    },
    input: {
        marginRight: 10,
        height: 40,
        width: 280,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },

    cardContainer: {
        flexDirection: 'row'
    },
    card: {
        width: width * 0.25,
        marginHorizontal: width * 0.02,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      },
      text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
      },
      indicatorContainer: {
        flexDirection: 'row',
        marginTop: 20,
      },
      indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#888',
        marginHorizontal: 5,
      },
})