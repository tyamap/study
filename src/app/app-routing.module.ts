import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroEditComponent } from './hero/hero-edit/hero-edit.component';
import { HeroNewComponent } from './hero/hero-new/hero-new.component';
import { TopPageComponent } from './top-page/top-page.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: 'top', component: TopPageComponent },
  { path: 'heroes', component: HeroListComponent, canActivate: [AuthGuard]},
  { path: 'heroes/new', component: HeroNewComponent, canActivate: [AuthGuard]},
  { path: 'heroes/:key', component: HeroDetailComponent, canActivate: [AuthGuard]},
  { path: 'heroes/:key/edit', component: HeroEditComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/heroes', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule { }
