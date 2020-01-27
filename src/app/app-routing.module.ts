import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './pages/hero/hero-detail/hero-detail.component';
import { HeroListComponent } from './pages/hero/hero-list/hero-list.component';
import { HeroEditComponent } from './pages/hero/hero-edit/hero-edit.component';
import { HeroNewComponent } from './pages/hero/hero-new/hero-new.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
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
