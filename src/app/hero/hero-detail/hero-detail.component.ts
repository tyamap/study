import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/heros';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor() { }

  ngOnInit() {
    this.hero = new Hero(1, 'スパイダーマン', 'web-shoot', 'あなたの親愛なる隣人、スパイディ！');
  }

}
