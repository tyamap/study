import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/shared/services/hero.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.heroService.get(1).subscribe(
      (hero: Hero) => {
        this.hero = hero;
      }
    );
  }
}
