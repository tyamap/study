import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroEditComponent } from './hero/hero-edit/hero-edit.component';


const routes: Routes = [
  { path: 'heros', component: HeroListComponent},
  { path: 'heros/:id', component: HeroDetailComponent},
  { path: 'heros/:id/edit', component: HeroEditComponent},
  { path: '', redirectTo: '/heros', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule { }
