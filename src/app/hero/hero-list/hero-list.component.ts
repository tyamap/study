import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/shared/services/hero.service';
// import { FirebaseService } from 'src/app/shared/services/firebase.service';

// ホバー情報を保持するための拡張クラス
class HeroListElement extends Hero {
  hovered: boolean;
}

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes: HeroListElement[] = null;

  constructor(
    // コンストラクターの引数でServiceを呼ぶことで、コンポーネントやサービスに注入できる。
    private heroService: HeroService,
    // firebase認証サービスの準備
//    private firebaseService: FirebaseService,
    ) { }

  ngOnInit() {
    // subscribeで対象のObservableを観測する。観測が完了すると、引数内の処理がコールバックされる。
    this.heroService.list().subscribe((heroes: Hero[]) => {
      // 配列内の各要素に対して処理をする、mapメソッドを利用。
      this.heroes = heroes.map((hero: Hero) => {
        return{
          // ...はSpreadOpertater。heroに対して、hovered: false を追加しているという書き方
          ... hero,
          hovered: false,
        };
      });
    });
  }

  hovered(hero: HeroListElement): void { hero.hovered = true; }
  unhovered(hero: HeroListElement): void { hero.hovered = false; }
}
