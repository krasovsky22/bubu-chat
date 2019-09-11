import { Button, Text } from "native-base";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { signInAsync } from "@services/google";

class LoginScreen extends Component {
    clickLogin = async () => {
        console.log('clicked');

        await signInAsync();
    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.clickLogin}>
                    <Text>Sign in With Google</Text>
                </Button>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});