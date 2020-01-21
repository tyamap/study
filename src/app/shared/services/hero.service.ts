import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable, of } from 'rxjs/index';
import { HeroEditComponent } from 'src/app/hero/hero-edit/hero-edit.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = [
    new Hero('H00001', 'スパイダーマン', 'ウェブシュート', 'あなたの親愛なる隣人、スパイディ！'),
    new Hero('H00002', 'アイアンマン', 'リパルサーレイ', '私が アイアンマンだ。'),
    new Hero('H00003', 'キャプテン・アメリカ', 'シールドスラッシュ', 'いや、できるさ。僕はキャプテンだ！'),
  ];

  constructor() { }

  // RxJSを利用した非同期処理。
  // ObservableはRxJSのクラス。Hero配列をObservableなものとして返す。
  list(): Observable<Hero[]> {
    return of(this.heroes);
  }

  // idで指定されたHeroのObsavableを返す。
  get(id: number): Observable<Hero> {
    return of(this.heroes[id - 1]);
  }

  // updateで与えられたheroと同じidを持つデータを探して、アップデート処理をする。
  update(hero: Hero): void {
    const index = this.heroes.findIndex((hr: Hero) => hr.id === hero.id);
    this.heroes[index] = hero;
  }
}
