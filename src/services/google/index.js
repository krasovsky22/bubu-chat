import * as GoogleSignIn from 'expo-google-sign-in';

export const signInAsync = async () => {
    try {
        await GoogleSignIn.initAsync();
        await GoogleSignIn.askForPlayServicesAsync();

        const { type, user } = await GoogleSignIn.signInAsync();

        console.log('LOGIN', type, user);
    }
    catch ({ message }) {
        console.log('catched message', message);
    }
}