import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button } from './common';

class LogInForm extends Component {
    render() {
        return (
            <Card>
                <CardSection />

                <CardSection />

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LogInForm;