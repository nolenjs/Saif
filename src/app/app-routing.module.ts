import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AmmoComponent } from './ammo/ammo.component';
import { LogComponent } from './log/log.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shoot', component: AmmoComponent },
  { path: 'buy', component: AmmoComponent },
  { path: 'reload', component: AmmoComponent },
  { path: 'log', component: LogComponent },
  { path: 'account', component: AccountComponent },
  { path: 'settings', component: AmmoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
