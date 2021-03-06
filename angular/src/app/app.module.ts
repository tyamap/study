import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './pages/hero/hero-list/hero-list.component';
import { HeroDetailComponent } from './pages/hero/hero-detail/hero-detail.component';
import { HeroEditComponent } from './pages/hero/hero-edit/hero-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForbiddenWordValidatorDirective } from './validators/forbidden-words';
import { HttpClientModule } from '@angular/common/http';
import { HeroNewComponent } from './pages/hero/hero-new/hero-new.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './shared/guard/auth.guard';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { LoginFirebaseUIComponent } from './pages/login-firebase-ui/login-firebase-ui.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  autoUpgradeAnonymousUsers: false, // 匿名認証ユーザー自動アップグレード
  signInFlow: 'redirect', // redirect or popup
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        auth_type: 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'aaa',
  privacyPolicyUrl: 'プライバシーポリシーのURL',
  signInSuccessUrl: 'http://localhost:4200/',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  siteName: 'hello-heroes',
};

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroEditComponent,
    ForbiddenWordValidatorDirective,
    HeroNewComponent,
    LoginFirebaseUIComponent,
    TopPageComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                // ngModelを認識するために、モジュールをインポート。
    ReactiveFormsModule,        // ReactiveFormを認識するためのモジュール
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),  // angularfireの設定
    AngularFireAuthModule,      // AngularfireのAuth用モジュール
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),　// FirebaseUIのモジュール
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
