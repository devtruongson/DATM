import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function firebaseConfig() {
    const config = {
        apiKey: 'AIzaSyBkJ_3BT5x42u9ihKupTYZN0ibJhUdMKNc',
        authDomain: 'film-b1776.firebaseapp.com',
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    const provider = {
        googleAuth: new firebase.auth.GoogleAuthProvider(),
        githubAuth: new firebase.auth.GithubAuthProvider(),
    };
    return provider;
}
