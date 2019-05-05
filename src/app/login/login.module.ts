import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
  	LoginComponent
  ],
  export: [
  LoginComponent
  ]
})
export class LoginModule { }
