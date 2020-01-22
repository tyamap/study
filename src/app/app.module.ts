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

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroEditComponent,
    ForbiddenWordValidatorDirective,
    HeroNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ngModelを認識するために、モジュールをインポート。
    FormsModule,
    // ReactiveFormを認識するためのモジュール
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
