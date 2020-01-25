import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;

  email: string;
  password: string;

  constructor(private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
    // 認証状態の変更をsubscribe
    this.user = this.angularFireAuth.authState;
    this.user.subscribe(u => console.log(u.providerData));
  }

  // ログアウト
  async logout() {
    this.angularFireAuth.auth.signOut();
  }

  // Google認証によるログイン
  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.auth.signInWithPopup(provider);
  }

  // 匿名認証
  async loginAnonymously() {
    const credential = await this.angularFireAuth.auth.signInAnonymously();
  }

  // メールアドレスとパスワード
  async loginWithEmailAndPassword() {
    try {
      // ユーザの登録
      const credential = await this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
    } catch (error) {
      if (error.code = 'auth/email-already-in-use') {
        // すでに登録されている場合
        await this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password);
      }
      console.log(error);
    } finally {
      this.email = '';
      this.password = '';
    }
  }

  // 匿名ユーザーをグーグル認証でアップグレード
  async upgradeAnonumouswithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.auth.currentUser.linkWithPopup(provider);
  }
}

