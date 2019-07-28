import app from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    // Auth api. End points called asynchronously, they need to be
    // resolved later
    createUserEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    updateProfile = updates =>
        this.auth.currentUser.updateProfile({ ...updates });

    signInEmailPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    signOut = () => this.auth.signOut();
    passwordReset = email => this.auth.sendPasswordResetEmail(email);
    passwordUpdate = password => this.auth.currentUser.updatePassword(password);
    // Social logins
    googleSignIn = () => this.auth.signInWithPopup(this.googleProvider);
}
export default new Firebase();
