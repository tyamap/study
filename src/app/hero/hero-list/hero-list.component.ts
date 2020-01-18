import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/heros';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heros: Hero[] = null;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.heros = [
        new Hero(1, 'スパイダーマン', 'ウェブシュート', 'あなたの親愛なる隣人、スパイディ！'),
        new Hero(2, 'アイアンマン', 'リパルサーレイ', '私が アイアンマンだ。'),
        new Hero(3, 'キャプテン・アメリカ', 'シールドスラッシュ', 'いや、できるさ。僕はキャプテンだ！'),
      ];
    }, 3000);
  }

}
