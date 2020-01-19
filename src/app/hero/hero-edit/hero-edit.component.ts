import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/shared/services/hero.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {
  heroForm = this.fb.group({
    id: [''],
    name: [''],
    skill: [''],
    description: [''],
  });

  constructor(
    // URL情報を取得するクラスを追加
    private route: ActivatedRoute,
    // Routingを制御するクラスを追加
    private router: Router,
    // ReactiveFormを実装する各クラスを作成するクラス
    private fb: FormBuilder,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    // paramsでRouteで設定しているパラメータを取得する。
    this.route.params.subscribe((params: Params) => {
      this.heroService.get(params.id).subscribe((hero: Hero) => {
        this.heroForm.setValue({
          id: hero.id,
          name: hero.name,
          skill: hero.skill,
          description: hero.description,
        });
      });
    });
  }

  // Hero情報の取得
  saveHero(): void {
    const {id, name, skill, description} = this.heroForm.getRawValue();
    this.heroService.update(new Hero(id, name, skill, description));
    this.router.navigate(['/heros', this.heroForm.controls.id.value]);
  }
}
