import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  entryComponents: [],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
