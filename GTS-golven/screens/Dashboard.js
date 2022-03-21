import React, { useState, useEffect, } from 'react'
import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native'

import Colors from '../components/Colors';
import Card from '../components/Card'
import Popup from '../components/Popup';
import NavBar from '../components/NavBar'

import * as ImagePicker from 'expo-image-picker';

const Dashboard = ({ navigation }) => {
    const [pickedImagePath, setPickedImagePath] = useState('');
    const [popup, setpopup] = useState(0)


    const showPopUp = () => {
        setpopup(1)
    }

    const closePopUp = () => {
        setpopup(0)
    }

    const showImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Je hebt toegang tot de cameraroll geweirgerd");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        // console.log(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
        }
    }

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Je hebt toegang tot de camera geweigerd!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        // console.log(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
        }
    }

    let content = <NavBar />
    if (popup === 1) {
        content = <Popup close={closePopUp} pressedCameraRoll={showImagePicker} pressedCamera={openCamera} />
    } else {
        content = <NavBar />
    }

    return (
        <View style={styles.screen}>
            <View>
                <ScrollView
                    horizontal={true}
                    alwaysBounceHorizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={'fast'}
                    snapToInterval={200}
                    snapToAlignment={'center'}
                    style={styles.ScrollView}
                >
                    <View style={styles.card}>
                        <Pressable style={styles.container} onPress={showPopUp}>
                            <View style={styles.roundConatiner}>
                                <View style={styles.conatinerPlus}>
                                    <Text style={styles.plus}>+</Text>
                                </View>
                            </View>
                            <Text style={styles.text}>Upload jouw video</Text>
                        </Pressable>
                        <Card title='Stroke 1 - i5' date='09-08-2022' source={{ uri: pickedImagePath }} />
                        <Card title='Stroke 2 - i5' date='09-08-2022' source={{ uri: pickedImagePath }} />
                        <Card title='Stroke 3 - i5' date='09-08-2022' source={{ uri: pickedImagePath }} />
                    </View>
                </ScrollView>
            </View>
            {content}
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 50,
    },

    ScrollView: {
        width: '100%',
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

    card: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Dashboard;