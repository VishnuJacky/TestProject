import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './modules/welcome/welcome/welcome.component';
import { AuthGuard } from './core/guards/auth.guard';




const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule',
    canActivate: [AuthGuard]

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
