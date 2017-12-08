import React, { Component } from 'react';
import { Dimensions, Image, Keyboard, StatusBar, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#34495e',
        flex: 1,
        justifyContent: 'flex-end'
    },
    backgroundImage: {
        alignSelf: 'flex-end',
        flex: 1,
        justifyContent: 'flex-start'
    },
    signInText: {
        backgroundColor: '#7ad5c9',
        borderRadius: 4,
        color: '#f5f5f5',
        fontFamily: 'sans-serif-light',
        fontSize: 16,
        padding: 16,
        marginTop: 16,
        textAlign: 'center',
        width: width - 32
    },
    signUpText: {
        backgroundColor: '#283b4f',
        borderRadius: 4,
        color: '#f5f5f5',
        fontFamily: 'sans-serif-thin',
        fontSize: 16,
        marginVertical: 16,
        padding: 16,
        textAlign: 'center',
        width: width - 32
    }
});

class Welcome extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let navigate = this.props.navigation.navigate;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#34495e'}
                    barStyle={'light-content'}
                />
                <View style={styles.backgroundImage}>
                    <Image source={require('../asset/2.png')} style={{ height: 256, width: 256 }} />
                </View>
                <View style={{
                    flex: 1
                }}>
                    <Text style={{
                        color: '#f5f5f5',
                        fontFamily: 'sans-serif-thin',
                        fontSize: 48,
                        margin: 16
                    }}>
                        Have chit-chat{'\n'}on coffee{'\n'}break
                    </Text>
                </View>
                <View>
                    <Text
                        onPress={() => {
                            Keyboard.dismiss();
                            navigate('SIGNIN');
                        }}
                        style={styles.signInText}>
                        SignIn
                    </Text>
                </View>
                <View>
                    <Text
                        onPress={() => {
                            Keyboard.dismiss();
                            navigate('SIGNUP');
                        }}
                        style={styles.signUpText}>
                        Create Account
                    </Text>
                </View>
            </View>
        );
    }
}

export default Welcome;
