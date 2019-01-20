import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBbrx4uzA0jE6Qd8Yptb1mGvlU1NmP5avU",
      authDomain: "blog-ff8ce.firebaseapp.com",
      databaseURL: "https://blog-ff8ce.firebaseio.com",
      projectId: "blog-ff8ce",
      storageBucket: "blog-ff8ce.appspot.com",
      messagingSenderId: "889343901055"
    };
    firebase.initializeApp(config);
  }
}

