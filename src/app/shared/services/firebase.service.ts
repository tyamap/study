import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  EMAIL = 'example@example.com';
  PASSWORD = 'password';

  constructor() {
    const config = {
      apiKey: 'AIzaSyDW0Wd9i2aVcCd-BUSp5V9k7FCMDP9kwKI',
      authDomain: 'hello-heroes.firebaseapp.com',
      databaseURL: 'https://hello-heroes.firebaseio.com',
      projectId: 'hello-heroes',
      storageBucket: 'hello-heroes.appspot.com',
      messagingSenderId: '385562054185',
      appId: '1:385562054185:web:b3ebf092b0e075456b9638'
    };
    firebase.initializeApp(config);
    // this.signInOrCreateUser(this.EMAIL, this.PASSWORD);
  }

  // // firebase未登録なら登録処理。登録済みならログイン処理
  // signInOrCreateUser(email: string, password: string): void {
  //   firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential: UserCredential) => {
  //     console.log(userCredential.user.uid);
  //   }).catch(() => {
  //     firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential: UserCredential) => {
  //       console.log(userCredential.user.uid);
  //     });
  //   });
  // }
}
