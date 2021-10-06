
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut, getAuth } from '@firebase/auth';
import { getDatabase } from 'firebase/database'

const firebaseConfig = {

    apiKey: "AIzaSyCQoYPikqORZbq-Uf7KmoHYF7P3VUG3IXk",
    authDomain: "gb-react-8f03b.firebaseapp.com",
    databaseURL: "https://gb-react-8f03b-default-rtdb.firebaseio.com",
    projectId: "gb-react-8f03b",
    storageBucket: "gb-react-8f03b.appspot.com",
    messagingSenderId: "189385487986",
    appId: "1:189385487986:web:8dac7915a5e983e80074eb"


};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
};
export const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
}
export const signOut = async () => {
    await firebaseSignOut(auth);
}

