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
    signInHead: {
        alignSelf: 'flex-end',
        color: '#808080',
        fontFamily: 'sans-serif-light',
        fontSize: 40,
        margin: 16
    },
    signInInput: {
        borderBottomColor: '#808080',
        borderBottomWidth: 0.5,
        fontFamily: 'sans-serif-thin',
        fontSize: 16,
        marginVertical: 8,
        paddingVertical: 4,
        width: width - 32
    },
    signInText: {
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

class SignIn extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            signInEmail: null,
            signInPassword: null
        };
    }

    signMeIn() {
        Keyboard.dismiss();
        if (this.state.signInEmail === 'All' && this.state.signInPassword === 'All') {
            this.props.navigation.navigate('HOME');
        } else {
            alert('Email/Password is Invalid.');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#f5f5f5'}
                    barStyle={'dark-content'}
                />
                <Text style={styles.signInHead}>
                    Sign In
                </Text>
                <TextInput
                    autoFocus={true}
                    keyboardType={'email-address'}
                    onChangeText={(signInEmail) => {
                        this.setState({ signInEmail })
                    }}
                    onSubmitEditing={() => {
                        this.refs.password.focus();
                    }}
                    placeholder={'Email Address'} style={styles.signInInput}
                    returnKeyType={'next'}
                    underlineColorAndroid={'#f5f5f5'} />
                <TextInput
                    onChangeText={(signInPassword) => {
                        this.setState({ signInPassword })
                    }}
                    onSubmitEditing={this.signMeIn.bind(this)}
                    placeholder={'Password'}
                    ref={'password'}
                    style={styles.signInInput}
                    underlineColorAndroid={'#f5f5f5'} />
                <Text
                    onPress={this.signMeIn.bind(this)}
                    style={styles.signInText}>
                    Sign Me In
                </Text>
            </View>
        );
    }
}

export default SignIn;
