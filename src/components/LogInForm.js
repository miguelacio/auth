import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';


class LogInForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoggedSucces.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoggedSucces.bind(this))
                    .catch(this.onLoggedFail.bind(this));
            });
    }
    onLoggedSucces() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }
    onLoggedFail() {
        this.setState({ error: 'Auth failed', loading: false });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        }
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection >
                    <Input
                        value={this.state.email}
                        placeholder='user@mail.com'
                        onChangeText={email => this.setState({ email })}
                        label='Email' />
                </CardSection >

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label='Passwrd'
                    />
                </CardSection>

                <Text
                    style={styles.errorSTyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorSTyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LogInForm;