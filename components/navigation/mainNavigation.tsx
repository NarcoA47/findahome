import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, View, ScrollView, Animated, Dimensions } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const data = [
    {   
        title: 'Town center', 
        borderColor: '#ccc', 
        borderWidth: 1, 
        borderRadius: 4, 
        padding: 0,
    },
    { 
        title: 'Chilenje', 
        borderColor: '#ccc', 
        borderWidth: 1, 
        borderRadius: 4, 
    },
    { 
        title: 'Mtendere', 
        borderColor: '#ccc', 
        borderWidth: 1, 
        borderRadius: 4, 
    },
    { 
        title: 'Kamwala S', 
        borderColor: '#ccc', 
        borderWidth: 1, 
        borderRadius: 4, 
    },
    { 
        title: 'Kabanana', 
        borderColor: '#ccc', 
        borderWidth: 1, 
        borderRadius: 4,
        padding: 0,
    },
    { 
        title: 'Chelstone', 
        borderColor: '#ccc', 
        borderWidth: 1, 
        borderRadius: 4,
        padding: 0,
    },
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
                    <Ionicons name="filter-circle-outline" size={45} color="#ccc" />
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
                    {data.map((item, index) => {
                    return (
                        <View style={[styles.card, 
                        {  
                            borderColor: item.borderColor, 
                            borderWidth: item.borderWidth, 
                            borderRadius: item.borderRadius, 
                            padding: item.padding,
                        }]} key={index}>
                        <Text style={styles.text}>{item.title}</Text>
                        </View>
                    );
                    })}
                </Animated.ScrollView>
                </View>
            </View>
            <View style={styles.bottomNavigator}></View>
        </View>
    )
}

export default HomeNavigation

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: '#f0f0f0',
        margin: 20,
        flexDirection: 'row',
    },
    input: {
        marginRight: 10,
        height: 40,
        width: 295,
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
        width: width * 0.2,
        marginHorizontal: width * 0.01,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 20,
      },
      text: {
        fontSize: 16,
        color: '#666',
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
      bottomNavigator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: 20,
      },
})