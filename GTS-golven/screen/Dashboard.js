import React, { useState } from 'react'
import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native'

import Colors from '../components/Colors';
import Card from '../components/Card'

import * as ImagePicker from 'expo-image-picker';

const Dashboard = props => {

    const [pickedImagePath, setPickedImagePath] = useState('');

    const showImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        console.log(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
            console.log(result.uri);
        }
    }

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        console.log(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
            console.log(result.uri);
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.cards}>
                <ScrollView
                    horizontal={true}
                    alwaysBounceHorizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={'fast'}
                    snapToInterval={200}
                    snapToAlignment={'center'}
                >
                    <Pressable onPress={showImagePicker}>
                        <View style={styles.container}>
                            <View style={styles.roundConatiner}>
                                <View style={styles.conatinerPlus}>
                                    <Text style={styles.plus}>+</Text>
                                </View>
                            </View>
                            <Text style={styles.text}>Upload jouw video</Text>
                        </View>
                    </Pressable>
                    <Card title='Stroke 1 - i5' date='09-08-2022' />
                    <Card title='Stroke 2 - i5' date='09-08-2022' />
                    <Card title='Stroke 3 - i5' date='09-08-2022' />
                </ScrollView>
            </View>
            <View>
                {
                    pickedImagePath !== '' && <Image
                        source={{ uri: pickedImagePath }}
                        style={styles.image}
                    />
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 50,
    },

    container: {
        width: 200,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    roundConatiner: {
        backgroundColor: Colors.primary,
        width: 130,
        height: 130,
        borderRadius: 100,
    },

    conatinerPlus: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },

    plus: {
        fontSize: 50,
    },

    text: {
        marginTop: 10,
        fontSize: 20,
    },

    image: {
        width: 400,
        height: 300,
        resizeMode: 'cover',
    }
});

export default Dashboard;