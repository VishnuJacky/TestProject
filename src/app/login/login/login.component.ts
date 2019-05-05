import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public login: FormGroup;

  public strength;

  constructor( public fb: FormBuilder) {
    this.login = this.fb.group({
      username:  ['', Validators.required],
      password:  ['', Validators.required],
    });
  }

  ngOnInit() { }

  makelogin() {
    const value = this.login.value;
    if (value.username === 'hari' && value.password === '123' ) {

    }
  }

}
