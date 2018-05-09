import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
  }

}
