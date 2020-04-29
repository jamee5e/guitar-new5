import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";




const config = {
    apiKey: "AIzaSyAXh0mWpH6PwVf5iQHWJT0W0fht0uHCfms",
    authDomain: "mini2-240311.firebaseapp.com",
    databaseURL: "https://mini2-240311.firebaseio.com",
    projectId: "mini2-240311",
    storageBucket: "mini2-240311.appspot.com",
    messagingSenderId: "859113400433",
    appId: "1:859113400433:web:dfe3bb4b39ffee2ca753d0",
    measurementId: "G-M8VBEPWYJN"
   
}


class Firebase {
    constructor(){

        firebase.initializeApp(config);
        this.auth=firebase.auth();
        this.db=firebase.firestore();
    }

    async signin(email, password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
            console.log(err);
        });

        return user;
    }

    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
        console.log(err);
        });

        return user;
    }
    async logout(){
        const logout = await firebase.auth().signOut().catch(err => console.log(err));
        return logout;
    }

    async getUserState(){
        return new Promise(resolve=>{
            this.auth.onAuthStateChanged(resolve)
        });
    }
}

export default new Firebase();