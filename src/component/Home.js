import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#34495E',
        flex: 1,
        justifyContent: 'center'
    }
});

class Home extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#34495e'}
                    barStyle={'light-content'}
                />
                <Text style={{
                    color: '#fff',
                    fontFamily: 'sans-serif-thin',
                    fontSize: 48,
                    textAlign: 'center'
                }}>
                    Welcome{'\n'}----- to -----{'\n'}The Future
                </Text>
            </View>
        );
    }
}

export default Home;
