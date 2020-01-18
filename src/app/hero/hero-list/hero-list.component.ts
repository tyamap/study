import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/shared/services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heros: Hero[] = null;

  constructor(
    // コンストラクターの引数でServiceを呼ぶことで、コンポーネントやサービスに注入できる。
    private heroService: HeroService,
    ) { }

  ngOnInit() {
    // subscribeで対象のObservableを観測する。観測が完了すると、引数内の処理がコールバックされる。
    this.heroService.list().subscribe(
      (heros: Hero[]) => {
        this.heros = heros;
      }
    );
  }
}
