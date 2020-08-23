import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable, of } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  BASE_URL = 'https://hello-heroes.firebaseio.com';
  uid: string;
  TOKEN: string;

  heroes = [new Hero('', '', '', '')];

  constructor(
    private http: HttpClient,
    private angularFireAuth: AngularFireAuth,
    private angularFireRtdb: AngularFireDatabase,
  ) {
    this.angularFireAuth.authState.subscribe(u => u.getIdToken().then((token) => {
      this.TOKEN = token;
      this.uid = u.uid;
    }));
  }

  // RxJSを利用した非同期処理。
  // ObservableはRxJSのクラス。Hero配列をObservableなものとして返す。
  // firebaseのRTDBからjsonファイルを読み込み、リスト。
  list(): Observable<Hero[]> {
    return this.http.get(`${this.BASE_URL}/users/${this.uid}/heroes.json`, { params: { auth: this.TOKEN } }).pipe(
      map((response: any) =>
        Object.keys(response).map((key: string) => {
          const hr = response[key];
          return new Hero(key, hr.name, hr.skill, hr.description);
        })
      )
    );
  }

  listMyHeroes(userId: string) {
    return this.angularFireRtdb.object(`users/${userId}`).valueChanges();
  }

  // idで指定されたHeroのObsavableを返す。
  get(id: number): Observable<Hero> {
    return of(this.heroes[id - 1]);
  }

  // updateで与えられたheroと同じidを持つデータを探して、アップデート処理をする。
  update(hero: Hero): void {
    const index = this.heroes.findIndex((hr: Hero) => hr.key === hero.key);
    this.heroes[index] = hero;
  }

  // ヒーロー作成。作成したHeroのKeyにresoponse.name（データキー）を格納する。
  create(hero: Hero): Observable<void> { // <= 追加
    return this.http.post(`${this.BASE_URL}/users/${this.uid}/heroes.json`, hero).pipe(
      map((response: any) => hero.key = response.name),
    );
  }
}
