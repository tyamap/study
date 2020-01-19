import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/shared/services/hero.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    // URL情報を取得するクラスを追加
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  // getメソッドのHeroを観測して、完了したら表示する。
  ngOnInit() {
    // paramsでRouteで設定しているパラメータを取得する。
    this.route.params.subscribe(
      (params: Params) => {
        this.heroService.get(params.id).subscribe(
          (hero: Hero) => {
            this.hero = hero;
          }
        );
      }
    );
  }
}
