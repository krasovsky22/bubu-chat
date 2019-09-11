import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import { onLoginEvent as onLoginEvent } from "@services/firebase"

class LoadingScreen extends Component {
    componentDidMount() {
        const { navigation } = this.props;

        onLoginEvent(user => {
            console.log('asdasda', user);
            if (user) {
                console.log('WOW', user);
            }
            else {
                navigation.navigate('LoginScreen');
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}
export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});