import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/shared/services/hero.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {
  hero: Hero;

  constructor(
    // URL情報を取得するクラスを追加
    private route: ActivatedRoute,
    // Routingを制御するクラスを追加
    private router: Router,
    private heroService: HeroService,
  ) { }

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

  // Hero情報の取得
  saveHero(): void {
    console.log(this.hero);
    this.router.navigate(['/heros']);
  }
}
