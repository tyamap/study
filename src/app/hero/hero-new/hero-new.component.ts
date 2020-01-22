import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HeroService } from '../../shared/services/hero.service';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss']
})
export class HeroNewComponent implements OnInit {
  heroForm = this.fb.group({
    key: [''],
    name: [''],
    // バリデーションを定義（HTML側でも定義できるが、特にmaxlengthはブラウザによって仕様が異なるため）
    skill: ['', Validators.compose([Validators.maxLength(20), Validators.required])],
    description: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
  }
  get name() { return this.heroForm.get('name'); }
  get skill() { return this.heroForm.get('skill'); }

  saveHero(): void {}
}
