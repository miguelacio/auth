import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LogInForm from './components/LogInForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBtYhZ32EvIdwMJIFvDVnWJTbL46W4cTVQ',
            authDomain: 'auth-f0ece.firebaseapp.com',
            databaseURL: 'https://auth-f0ece.firebaseio.com',
            projectId: 'auth-f0ece',
            storageBucket: 'auth-f0ece.appspot.com',
            messagingSenderId: '1088301824987'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
                );
                break;
            case false:
                return <LogInForm />
                break;
            default:
                return <Spinner />
                break;
        }


    }
    render() {
        return (
            <View>
                <Header headerText="Auth" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;