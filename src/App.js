import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBtYhZ32EvIdwMJIFvDVnWJTbL46W4cTVQ',
            authDomain: 'auth-f0ece.firebaseapp.com',
            databaseURL: 'https://auth-f0ece.firebaseio.com',
            projectId: 'auth-f0ece',
            storageBucket: 'auth-f0ece.appspot.com',
            messagingSenderId: '1088301824987'
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Auth"/>
                <Text>An App</Text>
            </View>
        );
    }
}

export default App;