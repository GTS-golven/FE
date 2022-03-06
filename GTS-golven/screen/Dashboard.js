import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Colors from '../components/Colors';
import Card from '../components/Card'

const Dashboard = props => {
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
                    <View style={styles.container}>
                        <View style={styles.roundConatiner}>
                            <View style={styles.conatinerPlus}>
                                <Text style={styles.plus}>+</Text>
                            </View>
                        </View>
                        <Text style={styles.text}>Upload jouw video</Text>
                    </View>
                    <Card title='Stroke 1 - i5' date='09-08-2022' />
                    <Card title='Stroke 2 - i5' date='09-08-2022' />
                    <Card title='Stroke 3 - i5' date='09-08-2022' />
                </ScrollView>
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
    }
});

export default Dashboard;