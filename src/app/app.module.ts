import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroEditComponent } from './hero/hero-edit/hero-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForbiddenWordValidatorDirective } from './validators/forbidden-words';
import { HttpClientModule } from '@angular/common/http';
import { HeroNewComponent } from './hero/hero-new/hero-new.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroEditComponent,
    ForbiddenWordValidatorDirective,
    HeroNewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                // ngModelを認識するために、モジュールをインポート。
    ReactiveFormsModule,        // ReactiveFormを認識するためのモジュール
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),  // angularfireの設定
    AngularFireAuthModule,      // AngularfireのAuth用モジュール
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
