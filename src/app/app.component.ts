import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoLogin();
    firebase.initializeApp(environment.firebaseConfig);
  }
}
