import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private router : Router,
              public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const user = await this.ngFireAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password);
    console.log(user);

    if(user.user.email){
      this.router.navigate(['/home']);
    } else {
      alert('login failed!');
    }
  }

  async register(){
    const user = await this.ngFireAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password);
    console.log(user);

    if(user.user.email){
      alert('registration successful!');
    } else {
      alert('registration failed!');
    }   
  }

}
