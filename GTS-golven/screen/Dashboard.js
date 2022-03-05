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
});

export default Dashboard;