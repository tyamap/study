import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/shared/services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {
  hero: Hero;

  constructor(
    // Routingを制御するクラスを追加
    private router: Router,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.heroService.get(1).subscribe(
      (hero: Hero) => {
        this.hero = hero;
      }
    );
  }

  saveHero(): void {
    console.log(this.hero);
    this.router.navigate(['/heros']);
  }
}
