import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable, of } from 'rxjs/index';
import { HeroEditComponent } from 'src/app/hero/hero-edit/hero-edit.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = [];

  constructor(
    private http: HttpClient,
  ) { }

  // RxJSを利用した非同期処理。
  // ObservableはRxJSのクラス。Hero配列をObservableなものとして返す。
  list(): Observable<Hero[]> {
    return this.http.get(`https://hello-heroes.firebaseio.com/heroes.json`).pipe(
      map((response: any) =>
        Object.keys(response).map((key: string) => {
          const hr = response[key];
          return new Hero(hr.id, hr.name, hr.skill, hr.description);
        })
      )
    );
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
}
