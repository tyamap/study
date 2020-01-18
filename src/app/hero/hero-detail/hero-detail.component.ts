import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/shared/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
  ) { }

  // getメソッドのHeroを観測して、完了したら表示する。
  ngOnInit() {
    this.heroService.get(1).subscribe(
      (hero: Hero) => {
        this.hero = hero;
      }
    );
  }
}
