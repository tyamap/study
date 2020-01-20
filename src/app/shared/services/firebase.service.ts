import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  EMAIL = 'email@example.com';
  PASSWORD = 'password';

  constructor() {
    const config = {
      /**
       *
       *
       *   firebaseの認証キー
       *
       *
       */
    };
    firebase.initializeApp(config);
    this.signInOrCreateUser(this.EMAIL, this.PASSWORD);
  }

  // firebase未登録なら登録処理。登録済みならログイン処理
  signInOrCreateUser(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential: UserCredential) => {
      console.log(userCredential.user.uid);
    }).catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential: UserCredential) => {
        console.log(userCredential.user.uid);
      });
    });
   }
}
