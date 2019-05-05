import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  } ,
  {
    path : 'welcome',
    component : WelcomeComponent,
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
