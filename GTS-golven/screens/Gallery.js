import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Colors from '../components/Colors';
import NavBar from '../components/NavBar'

const Dashboard = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.screen}>
                    <View style={styles.topPic}>
                        <Image style={styles.imageTop} source={require('../assets/oudere-mannen-golf.jpg')} />
                        <Text style={styles.text}>Stroke 1 -i5</Text>
                    </View>
                    <View style={styles.infoConainer}>
                        <View style={styles.row}>
                            <View style={styles.container}>
                                <Image />
                                <Text style={styles.text2}>RPM</Text>
                                <Text style={styles.text3}>6000</Text>
                                <Text style={styles.text4}>rpm</Text>
                            </View>
                            <View style={styles.container}>
                                <Image />
                                <Text style={styles.text2}>Height</Text>
                                <Text style={styles.text3}>60</Text>
                                <Text style={styles.text4}>meter</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.container}>
                                <Image />
                                <Text style={styles.text2}>Travel</Text>
                                <Text style={styles.text3}>170</Text>
                                <Text style={styles.text4}>meter</Text>
                            </View>
                            <View style={styles.container}>
                                <Image />
                                <Text style={styles.text2}>Angle</Text>
                                <Text style={styles.text3}>13</Text>
                                <Text style={styles.text4}>graden</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.container}>
                                <Image />
                                <Text style={styles.text2}>x-as</Text>
                                <Text style={styles.text3}>2</Text>
                                <Text style={styles.text4}>graden</Text>
                            </View>
                            <View style={styles.container}>
                                <Image />
                                <Text style={styles.text2}>Air time</Text>
                                <Text style={styles.text3}>9</Text>
                                <Text style={styles.text4}>seconden</Text>
                            </View>
                        </View>
                        <View style={styles.bottomPic}>
                            <Image style={styles.imageBottom} source={require('../assets/balbaan.jpg')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <NavBar />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginBottom: 70,
    },

    topPic: {
        alignItems: 'center',
    },

    infoConainer: {
        width: '100%',
        height: 850,
        justifyContent: 'space-evenly',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    container: {
        backgroundColor: Colors.primary,
        width: 140,
        height: 140,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageTop: {
        width: '100%',
        height: 250,
    },

    bottomPic: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageBottom: {
        width: '80%',
        height: 300,
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 10,
    },

    text2: {
        fontSize: 20,
        position: 'absolute',
        top: 0,
    },
    text3: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text4: {
        fontSize: 15,
        position: 'absolute',
        bottom: 10,
        right: 20,
    },
});

export default Dashboard;