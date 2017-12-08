import React, { Component } from 'react';
import { Dimensions, Keyboard, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center'
    },
    signUpHead: {
        alignSelf: 'flex-end',
        color: '#808080',
        fontFamily: 'sans-serif-light',
        fontSize: 40,
        margin: 16
    },
    signUpInput: {
        borderBottomColor: '#808080',
        borderBottomWidth: 0.5,
        fontFamily: 'sans-serif-thin',
        fontSize: 16,
        marginVertical: 8,
        paddingVertical: 4,
        width: width - 32
    },
    signUpText: {
        backgroundColor: '#7ad5c9',
        borderRadius: 4,
        color: '#f5f5f5',
        fontFamily: 'sans-serif-light',
        fontSize: 16,
        marginVertical: 16,
        padding: 16,
        textAlign: 'center',
        width: width - 32
    }
});

class SignUp extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#f5f5f5'}
                    barStyle={'dark-content'}
                />
                <Text style={styles.signUpHead}>
                    Sign Up
                </Text>
                <TextInput
                    autoFocus={true}
                    onSubmitEditing={() => {
                        this.refs.emailAddress.focus();
                    }}
                    placeholder={'Name'}
                    style={styles.signUpInput}
                    returnKeyType={'next'}
                    underlineColorAndroid={'#f5f5f5'}
                />
                <TextInput
                    keyboardType={'email-address'}
                    onSubmitEditing={() => {
                        this.refs.password.focus();
                    }}
                    placeholder={'Email Address'}
                    ref={'emailAddress'}
                    style={styles.signUpInput}
                    returnKeyType={'next'}
                    underlineColorAndroid={'#f5f5f5'}
                />
                <TextInput
                    placeholder={'Password'}
                    style={styles.signUpInput}
                    ref={'password'}
                    returnKeyType={'next'}
                    underlineColorAndroid={'#f5f5f5'}
                />
                <Text
                    onPress={() => {
                        Keyboard.dismiss();
                        alert('Developer on Leaves!');
                    }}
                    style={styles.signUpText}>
                    Create My Account
                </Text>
            </View>
        );
    }
}

export default SignUp;
