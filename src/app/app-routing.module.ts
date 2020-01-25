import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroEditComponent } from './hero/hero-edit/hero-edit.component';
import { HeroNewComponent } from './hero/hero-new/hero-new.component';
import { TopPageComponent } from './top-page/top-page.component';


const routes: Routes = [
  { path: 'top', component: TopPageComponent },
  { path: 'heroes', component: HeroListComponent},
  { path: 'heroes/new', component: HeroNewComponent },
  { path: 'heroes/:id', component: HeroDetailComponent},
  { path: 'heroes/:id/edit', component: HeroEditComponent},
  { path: '', redirectTo: '/heroes', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule { }
